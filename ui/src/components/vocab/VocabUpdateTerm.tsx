import { useState, useEffect, useRef } from 'react';
import type { WordData } from '../../types/vocabTypes';
import { addData, fetchOneWord, updateData, deleteById } from '../../utils/supabaseRequests';
import type { SupabaseClient } from "@supabase/supabase-js";
import { knowledgelevels } from '../../data/SampleVocabData';
import { libretranslate } from '../../utils/apiRequests';

type VocabUpdateTermProps = {
  supabase: SupabaseClient | null;
  categories: string[];
  words: WordData[];
  setWords: React.Dispatch<React.SetStateAction<WordData[]>>;
  selectedWord: WordData | null;
}

const VocabUpdateTerm = ({ supabase, categories, words, setWords, selectedWord }: VocabUpdateTermProps) => {
  const [id, setId] = useState<string | undefined>(selectedWord ? selectedWord.id : '');
  const [idToDelete, setIdToDelete] = useState<string | undefined>(selectedWord ? selectedWord.id : '');
  const [english, setEnglish] = useState<string>(selectedWord ? selectedWord.english : '');
  const [spanish, setSpanish] = useState<string>(selectedWord ? selectedWord.spanish : '');
  const [knowledgelevel, setKnowledgelevel] = useState<number>(selectedWord ? selectedWord.knowledgelevel : 0);
  const [category, setCategory] = useState<string>(selectedWord ? selectedWord.category : '');
  const [newCategory, setNewCategory] = useState<string>('');
  const [statusMsg, setStatusMsg] = useState<string>('');
  const targetCollection = 'spanish_vocab';
  const [spanishAlternatives, setSpanishAlternatives] = useState<string[]>([]);
  const [englishAlternatives, setEnglishAlternatives] = useState<string[]>([]);

  const spanishInputRef = useRef<HTMLInputElement>(null);
  const idToDeleteInputRef = useRef<HTMLInputElement>(null);

  const specialChars = ['\u00E1', '\u00E9', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00FC', '\u00A1', '\u00BF'];
  type UpdateGoal = 'add new word' | 'correct word info';

  const createDocumentId = (input: string) => {
    return input
      .toLowerCase()
      .replace(/\b(el|la|un|una|los|las)\b/g, '')
      .trim()
      // .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // optional to remove accents
      .replace(/\s+/g, '_');
  }

  useEffect(() => {
    const newId = createDocumentId(spanish);
    setId(newId);
  }, [spanish])

  const update = async (updateGoal: UpdateGoal) => {
    setStatusMsg('');
    const customWordId = createDocumentId(spanish);
    let categoryToUse = ''
    if(newCategory) {
      categoryToUse = newCategory.toLowerCase()
    } else {
      categoryToUse = category
    }
    if(!categoryToUse || categoryToUse === 'uncategorized') {
      setStatusMsg('Please enter or select a category!');
      return;
    }
    const newWordData: WordData = {
      id: customWordId,
      category: categoryToUse,
      spanish: spanish,
      english: english,
      knowledgelevel: knowledgelevel,
    };

    const [result, error] = await (
      updateGoal === 'add new word'
        ? addData(supabase, targetCollection, newWordData)
        : updateData(supabase, targetCollection, newWordData)
    );

    if(result) {
      if(updateGoal === 'add new word') {
        setStatusMsg(`Successfully added ${customWordId}`)
      } else {
        setStatusMsg(`Successfully updated ${customWordId}`)
      }
      clear();

      // Update local copy to keep it in sync with database since only query upon login
      const showSpanish = knowledgelevel === 1 ? false : true;
      const newWordWithId: WordData = {
        ...newWordData,
        id: customWordId,
        showSpanish: showSpanish,
      };
      setWords((prevWords) => [...prevWords, newWordWithId]);
    } else if (error && error.message.includes('duplicate')) {
      setStatusMsg(`${customWordId} already exists in the database`)
    } else if(updateGoal === 'add new word') {
      setStatusMsg(`Error adding ${customWordId} to the database`)
    } else {
      setStatusMsg(`Error updating ${customWordId} in the database`)
    }
  }

  const deleteWord = async () => {
    setStatusMsg('');
    
    if(!idToDelete) {
      setStatusMsg('Enter an id to delete');
      return;
    }
    const [result] = await deleteById(supabase, targetCollection, idToDelete);

    if(result) {
      setStatusMsg(`Successfully deleted ${idToDelete}`)
      setIdToDelete('');

      // Update local copy to keep it in sync with database since only query upon login
      const newWords = words.filter(word => word.id !== idToDelete);
      setWords(newWords);

    } else {
      setStatusMsg(`Error deleting ${idToDelete} from the database`)
    }
  }

  const lookup = async () => {
    if(!spanish && !english) {
      setStatusMsg('Enter text in the Spanish or English box and try again');
    } else if (spanish && english) {
      setStatusMsg('Put text in only 1 box (Spanish or English) and try again');
    } else if (spanish) {
      const id = createDocumentId(spanish);
      const word: WordData | null = await fetchOneWord(supabase, 'spanish_vocab', id);
      if(word) {
        setEnglish(word.english);
        setCategory(word.category);
        setKnowledgelevel(word.knowledgelevel);
        setStatusMsg(`${spanish} is already in the database!`);
      } else {
        translate();
      }
    } else if (english) {
      translate();
    } else {
      setStatusMsg('Other lookup error');
    }
  }

  const translate = async () => {
    if(english) {
      const {result, alternatives, translatedText} = await libretranslate(english, 'en', 'es');
      setSpanish(translatedText);
      setSpanishAlternatives(alternatives);
      setEnglishAlternatives([]);
      if(result) {
        setStatusMsg(`Update Spanish if needed and add to database by clicking on add button.`)
      } else {
        setStatusMsg('Something didn\'t work right with libretranslate');
      }
    } else if (spanish) {
      const {result, alternatives, translatedText} = await libretranslate(spanish, 'es', 'en');
      setEnglish(translatedText);
      setEnglishAlternatives(alternatives);
      setSpanishAlternatives([]);
      if(result) {
        setStatusMsg(`Update English if needed and add to database by clicking on add button.`)
      } else {
        setStatusMsg('Something didn\'t work right with libretranslate');
      }
    }
  }

  const clear = () => {
    setEnglish('');
    setSpanish('');
    setCategory('');
    setNewCategory('');
    setKnowledgelevel(0);
    setEnglishAlternatives([]);
    setSpanishAlternatives([]);
  }

  return (
    <div className='vocab-form-page'>
      <h2>Update</h2>
      <form className='vocab-update-form'>
        <p>Category:</p>
        <div className='vocab-update-category-buttons-row'>
          <div>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled>
                -- Choose a category --
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                required={false}
                placeholder='New category'
              />
            </label>
          </div>
        </div>

        <div className='vocab-update-form-languages-row'>
          <div className='vocab-update-form-languages-col'>
            <p>Spanish:</p>
            <div>
              <input
                ref={spanishInputRef}
                type="text"
                value={spanish}
                onChange={(e) => setSpanish(e.target.value)}
                required={true}
              />
            </div>
            <div className='vocab-special-char-row'>
              {specialChars.map((char, index) => (
                <button 
                  className='vocab-special-char-button'
                  type="button"
                  key={index}
                  onClick={() => {
                    setSpanish(prev => prev+=char);
                    requestAnimationFrame(() => {
                      spanishInputRef.current?.focus();
                      const len = spanishInputRef.current?.value.length ?? 0;
                      spanishInputRef.current?.setSelectionRange(len, len);
                    });
                  }}
                >
                  {char}
                </button>
              ))}
            </div>
            <p className='vocab-alt'>{spanishAlternatives.map((alt, index) => <span key={index}> {alt} </span>) }</p>
          </div>
          
          <div className='vocab-update-form-languages-col'>
            <p>English:</p>
            <input
              type="text"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
              required={true}
            />
            <p className='vocab-alt'>{englishAlternatives.map((alt, index) => <span key={index}> {alt} </span>) }</p>
          </div>
        </div>

        <p>Knowledge Level</p>
        <fieldset style={{ border: "none", padding: 0 }}>
          
          <div style={{ display: "flex", gap: "10px" }}>
            {knowledgelevels.map((level) => (
              <label
                key={level.value}
                className={`
                  vocab-knowledgelevel-button
                  vocab-knowledgelevel-button-${level.value}
                  ${knowledgelevel === level.value ? 'selected' : ''}
                `}
              >
                <input
                  type="radio"
                  name="knowledge"
                  value={level.value}
                  checked={knowledgelevel === level.value}
                  onChange={() => setKnowledgelevel(level.value)}
                  style={{ display: "none" }} // hide the radio circle
                />
              </label>
            ))}
          </div>
        </fieldset>
        <p>id: {id}</p>
        <div className='vocab-update-form-button-row'>
          <div className='vocab-update-form-button-row2'>
            <button type="button" className='vocab-text-button-update' onClick={() => update('add new word')}>Add new word</button>
            <button type="button" className='vocab-text-button-update' onClick={() => update('correct word info')}>Correct Word Info</button>
          </div>
          <div className='vocab-update-form-button-row2'>
            <button type="button" className='vocab-text-button-update' onClick={lookup}>Translate</button>
            <button type="button" className='vocab-text-button-update' onClick={clear}>Clear</button>
          </div>
        </div>

        <p>{statusMsg}</p>
      </form>

      <form className='vocab-update-form'>
          <p>Delete by id:</p>
            <div>
              <input
                ref={idToDeleteInputRef}
                type="text"
                value={idToDelete}
                onChange={(e) => setIdToDelete(e.target.value)}
                required={true}
              />
            </div>
            <div className='vocab-special-char-row'>
              {specialChars.map((char, index) => (
                <button 
                  className='vocab-special-char-button'
                  type="button"
                  key={index}
                  onClick={() => {
                    setIdToDelete(prev => prev+=char);
                    requestAnimationFrame(() => {
                      idToDeleteInputRef.current?.focus();
                      const len = idToDeleteInputRef.current?.value.length ?? 0;
                      idToDeleteInputRef.current?.setSelectionRange(len, len);
                    });
                  }}
                >
                  {char}
                </button>
              ))}
            </div>
            <div className='vocab-update-form-button-row'>
              <button type="button" className='vocab-text-button' onClick={deleteWord}>Remove from database</button>
            </div>
        </form>
    </div>
  );
}
  
export default VocabUpdateTerm;
