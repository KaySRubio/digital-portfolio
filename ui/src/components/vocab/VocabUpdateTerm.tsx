import { useState, useEffect, useRef } from 'react';
import type { WordData, TableName } from '../../types/vocabTypes';
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
  selectedTable: TableName;
}

const VocabUpdateTerm = ({
  supabase,
  selectedTable,
  categories,
  words,
  setWords,
  selectedWord
}: VocabUpdateTermProps) => {
  const [id, setId] = useState<string | undefined>(selectedWord ? selectedWord.id : '');
  const [idToDelete, setIdToDelete] = useState<string | undefined>(selectedWord ? selectedWord.id : '');
  const [definition, setDefinition] = useState<string>(selectedWord ? selectedWord.definition : '');
  const [term, setTerm] = useState<string>(selectedWord ? selectedWord.term : '');
  const [knowledgelevel, setKnowledgelevel] = useState<number>(selectedWord ? selectedWord.knowledgelevel : 0);
  const [category, setCategory] = useState<string>(selectedWord ? selectedWord.category : '');
  const [newCategory, setNewCategory] = useState<string>('');
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [spanishAlternatives, setSpanishAlternatives] = useState<string[]>([]);
  const [englishAlternatives, setEnglishAlternatives] = useState<string[]>([]);
  const [tags, setTags] = useState<string>(selectedWord && selectedWord.tags ? selectedWord.tags.join(',') : '');

  const spanishInputRef = useRef<HTMLTextAreaElement>(null);
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
    const newId = createDocumentId(term);
    setId(newId);
  }, [term])

  const update = async (updateGoal: UpdateGoal) => {
    setStatusMsg('');
    const customWordId = createDocumentId(term);
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

    let newWordData: WordData = {
      id: customWordId,
      category: categoryToUse,
      term: term,
      definition: definition,
      knowledgelevel: knowledgelevel,
    };

    if(selectedTable === 'science') {
      // Process the tags to turn into array,
      // remove leading/trailing spaces, and
      // replace inner spaces with underscores
      const newTags = tags.split(',').map(s =>
        s.trim().replace(/\s+/g, '_')
      );

      newWordData = {
        ...newWordData,
        tags: newTags,
      }
    }

    const [result, error] = await (
      updateGoal === 'add new word'
        ? addData(supabase, selectedTable, newWordData)
        : updateData(supabase, selectedTable, newWordData)
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
        showTerm: showSpanish,
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
    const [result] = await deleteById(supabase, selectedTable, idToDelete);

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
    if(!term && !definition) {
      setStatusMsg('Enter text in the Term or Definition box and try again');
    } else if (term && definition) {
      setStatusMsg('Put text in only 1 box (Term or Definition) and try again');
    } else if (term) {
      const id = createDocumentId(term);
      const word: WordData | null = await fetchOneWord(supabase, selectedTable, id);
      if(word) {
        setDefinition(word.term);
        setCategory(word.category);
        setKnowledgelevel(word.knowledgelevel);
        setStatusMsg(`${term} is already in the database!`);
      } else {
        translate();
      }
    } else if (definition) {
      translate();
    } else {
      setStatusMsg('Other lookup error');
    }
  }

  const translate = async () => {
    if(definition) {
      const {result, alternatives, translatedText} = await libretranslate(definition, 'en', 'es');
      setTerm(translatedText);
      setSpanishAlternatives(alternatives);
      setEnglishAlternatives([]);
      if(result) {
        setStatusMsg(`Update Spanish if needed and add to database by clicking on add button.`)
      } else {
        setStatusMsg('Something didn\'t work right with libretranslate');
      }
    } else if (term) {
      const {result, alternatives, translatedText} = await libretranslate(term, 'es', 'en');
      setDefinition(translatedText);
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
    setTerm('');
    setDefinition('');
    setCategory('');
    setNewCategory('');
    setKnowledgelevel(0);
    setEnglishAlternatives([]);
    setSpanishAlternatives([]);
    setTags('');
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
                className='vocab-update-form-input'
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
            <p>{selectedTable === 'spanish_vocab' ? 'Spanish' : 'Term'}:</p>
            <div>
              <textarea
                className={`${selectedTable === 'spanish_vocab' ? 'vocab-update-form-input-spanish' : 'vocab-update-form-input-science-term'} `}
                ref={spanishInputRef}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                required={true}
              />
            </div>
            {selectedTable === 'spanish_vocab' && <div className='vocab-special-char-row'>
              {specialChars.map((char, index) => (
                <button 
                  className='vocab-special-char-button'
                  type="button"
                  key={index}
                  onClick={() => {
                    setTerm(prev => prev+=char);
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
            </div>}
            <p className='vocab-alt'>{spanishAlternatives.map((alt, index) => <span key={index}> {alt} </span>) }</p>
          </div>
          
          <div className='vocab-update-form-languages-col'>
            <p>{selectedTable === 'spanish_vocab' ? 'English' : 'Definition'}:</p>
            <textarea
              className={`${selectedTable === 'spanish_vocab' ? 'vocab-update-form-input-spanish' : 'vocab-update-form-input-science-def'} `}
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
              required={true}
            />
            <p className='vocab-alt'>{englishAlternatives.map((alt, index) => <span key={index}> {alt} </span>) }</p>
          </div>
        </div>

        {selectedTable === 'science' && <div>
          <p>Tags (enter comma-separated)</p>
          <textarea
              className='vocab-update-form-input-science-tags'
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required={true}
            />
        </div>}

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
            {selectedTable=== 'spanish_vocab' && 
              <button type="button" className='vocab-text-button-update' onClick={lookup}>Translate</button>
            }
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
