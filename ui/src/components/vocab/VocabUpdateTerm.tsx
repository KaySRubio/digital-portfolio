import { useState } from 'react';
import type { WordData } from '../../types/vocabTypes';
import { addData } from '../../utils/supabaseRequests';
import type { SupabaseClient } from "@supabase/supabase-js";
import { knowledgelevels } from '../../data/SampleVocabData';

type VocabUpdateTermProps = {
  supabase: SupabaseClient | null;
  categories: string[];
  setWords: React.Dispatch<React.SetStateAction<WordData[]>>;
  selectedWord: WordData | null;
}

const VocabUpdateTerm = ({ supabase, categories, setWords, selectedWord }: VocabUpdateTermProps) => {
  const [english, setEnglish] = useState<string>(selectedWord ? selectedWord.english : '');
  const [spanish, setSpanish] = useState<string>(selectedWord ? selectedWord.spanish : '');
  const [knowledgelevel, setKnowledgelevel] = useState<number>(selectedWord ? selectedWord.knowledgelevel : 0);
  const [category, setCategory] = useState<string>(selectedWord ? selectedWord.category : '');
  const [newCategory, setNewCategory] = useState<string>('');
  const [statusMsg, setStatusMsg] = useState<string>('');

  const specialChars = ['\u00E1', '\u00E9', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00FC', '\u00A1', '\u00BF'];

  const createDocumentId = (input: string) => {
    return input
      .toLowerCase()
      .replace(/\b(el|la|un|una|los|las)\b/g, '')
      .trim()
      // .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // optional to remove accents
      .replace(/\s+/g, '_');
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMsg('');
    const targetCollection = 'spanish_vocab';
    const customWordId = createDocumentId(spanish);
    let categoryToUse = ''
    if(newCategory) {
      categoryToUse = newCategory
    } else {
      categoryToUse = category
    }
    const newWordData: WordData = {
      id: customWordId,
      category: categoryToUse,
      spanish: spanish,
      english: english,
      knowledgelevel: knowledgelevel,
    };

    const [result, error] = await addData(supabase, targetCollection, newWordData);
    if(result) {
      setStatusMsg(`Successfully added ${customWordId}`)
      setEnglish('');
      setSpanish('');
      setCategory('');
      setNewCategory('');
      setKnowledgelevel(0);

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
    } else {
      setStatusMsg(`Error adding ${customWordId} to the database`)
    }
  }

  const lookup = () => {
    console.log('need to look up word ind database and populate english');
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
          <div>
            <p>Spanish:</p>
            <div>
              <input
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
                  onClick={() => setSpanish(prev => prev+=char)}
                >
                  {char}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <p>English:</p>
              <input
                type="text"
                value={english}
                onChange={(e) => setEnglish(e.target.value)}
                required={true}
              />
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
        <div className='vocab-update-form-button-row'>
          <button type="button" className='vocab-text-button' onClick={() => handleSubmit}>Update</button>
          <button type="button" className='vocab-text-button' onClick={lookup}>Lookup</button>
        </div>

        <p>{statusMsg}</p>
      </form>
    </div>
  );
}
  
export default VocabUpdateTerm;