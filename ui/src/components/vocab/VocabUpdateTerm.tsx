import { useState, useEffect, useRef } from 'react';
import type { WordData, TableName, CategoryTags } from '../../types/vocabTypes';
import { addData, fetchOneWord, updateData, deleteById } from '../../utils/supabaseRequests';
import type { SupabaseClient } from "@supabase/supabase-js";
import { knowledgelevels, defaultTags } from '../../data/SampleVocabData';
import { libretranslate } from '../../utils/apiRequests';
import VocabAddSpecialChar from './VocabAddSpecialChar';

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
  const [idToDelete, setIdToDelete] = useState<string>(selectedWord && selectedWord.id ? selectedWord.id : '');
  const [definition, setDefinition] = useState<string>(selectedWord ? selectedWord.definition : '');
  const [term, setTerm] = useState<string>(selectedWord ? selectedWord.term : '');
  const [knowledgelevel, setKnowledgelevel] = useState<number>(selectedWord ? selectedWord.knowledgelevel : 0);
  const [category, setCategory] = useState<string>(selectedWord ? selectedWord.category : '');
  const [newCategory, setNewCategory] = useState<string>('');
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [spanishAlternatives, setSpanishAlternatives] = useState<string[]>([]);
  const [englishAlternatives, setEnglishAlternatives] = useState<string[]>([]);
  const [categoryTags, setCategoryTags] = useState<CategoryTags | null>(null);
  const [tagsToAdd, setTagsToAdd] = useState<string[]>([]);

  const spanishInputRef = useRef<HTMLTextAreaElement>(null);
  const idToDeleteInputRef = useRef<HTMLInputElement>(null);

  type UpdateGoal = 'add new word' | 'correct word info';

  const createDocumentId = (input: string) => {
    return input
      .toLowerCase()
      .replace(/\b(el|la|un|una|los|las)\b/g, '')
      .trim()
      .replace(/\s+/g, '_');
  }

  useEffect(() => {
    const selectedCategory = newCategory ? newCategory : category;
    if(Object.keys(defaultTags).includes(selectedCategory)) {
      setCategoryTags(defaultTags[selectedCategory]);
    } else {
      setCategoryTags(null);
    }
  }, [category, newCategory])

  useEffect(() => {
    const newId = createDocumentId(term);
    setId(newId);
  }, [term])

  const toggleTag = (tag: string) => {
    setTagsToAdd(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)   // remove
        : [...prev, tag]                // add
    );
  };

  const formatTagsForSupabase = (tags: string) => {
    return `{${tags
      .split(',')
      .map(s => `"${s.trim().replace(/\s+/g, '_')}"`)
      .join(',')}}`;
  }

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

    if(tagsToAdd.length > 0) {
      const tagString = tagsToAdd.join(',');
      const formattedTagString = formatTagsForSupabase(tagString);
      newWordData = {
        ...newWordData,
        tags: formattedTagString,
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
    setTagsToAdd([]);
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
              <VocabAddSpecialChar 
                onClick={(char) => {
                  setTerm(prev => prev+=char);
                  requestAnimationFrame(() => {
                    spanishInputRef.current?.focus();
                    const len = spanishInputRef.current?.value.length ?? 0;
                    spanishInputRef.current?.setSelectionRange(len, len);
                  });
                }}
              />

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

        {categoryTags && <div className='vocab-update-tags-section'>
          <p>Add tag(s):</p>
          {Object.entries(categoryTags).map(([groupName, tags]) => (
            <div key={groupName}>
              <p>{groupName}</p>
              <div className='vocab-update-tags'>
                {tags.map(tag => (
                  <button 
                    type='button'
                    key={tag}
                    className={`
                      vocab-terms-section-tag-button
                      ${tagsToAdd.includes(tag) ? 'vocab-terms-section-tag-button-selected' : ''}
                    `}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ))}
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
                className='vocab-terms-filter-input'
                ref={idToDeleteInputRef}
                type="text"
                value={idToDelete}
                onChange={(e) => setIdToDelete(e.target.value)}
                required={true}
              />
            </div>
            <div className='vocab-special-char-row'>
              <VocabAddSpecialChar 
                onClick={(char) => {
                  setIdToDelete(prev => prev+=char);
                  requestAnimationFrame(() => {
                    idToDeleteInputRef.current?.focus();
                    const len = idToDeleteInputRef.current?.value.length ?? 0;
                    idToDeleteInputRef.current?.setSelectionRange(len, len);
                  });
                }}
              />
            </div>
            <div className='vocab-update-form-button-row'>
              <button type="button" className='vocab-text-button' onClick={deleteWord}>Remove from database</button>
            </div>
        </form>
    </div>
  );
}
  
export default VocabUpdateTerm;
