import { useState } from 'react';
import type { WordData } from '../../types/vocabTypes';
import { addData } from '../../utils/supabaseRequests';

type AddWordProps = {
  supabase: any;
  categories: string[];
  setWords: React.Dispatch<React.SetStateAction<WordData[]>>;
}

const AddWord = ({ supabase, categories, setWords }: AddWordProps) => {
  const [english, setEnglish] = useState<string>('');
  const [spanish, setSpanish] = useState<string>('');
  const [knowledgelevel, setKnowledgelevel] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [newCategory, setNewCategory] = useState<string>('');
  const [statusMsg, setStatusMsg] = useState<string>('');

  const options = [
    { value: 0, color: "red"},
    { value: 1, color: "yellow"},
    { value: 2, color: "green"},
  ];

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

    try {
      await addData(supabase, targetCollection, newWordData);
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
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if(error.message.includes('duplicate')) {
        setStatusMsg(`${customWordId} already exists in the database`)
      } else {
        setStatusMsg(`Unable to add data`)
        console.warn(error);
      }
    }
  }

  return (
    <div>
      <h2>Add New Word</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
          Select category:{''}
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
        </label>
        </div>
        <div>
          <label>
            New category:
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              required={false}
            />
          </label>
        </div>
        <div>
        <div>
          <label>
            Spanish:
            <input
              type="text"
              value={spanish}
              onChange={(e) => setSpanish(e.target.value)}
              required={true}
            />
          </label>
        </div>
          <label>
            English:
            <input
              type="text"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
              required={true}
            />
          </label>
        </div>

        <fieldset style={{ border: "none", padding: 0 }}>
          <legend>Knowledge Level</legend>
          <div style={{ display: "flex", gap: "10px" }}>
            {options.map((option) => (
              <label
                key={option.value}
                style={{
                  backgroundColor: option.color,
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border:
                    knowledgelevel === option.value
                      ? "3px solid black"
                      : "1px solid gray",
                  userSelect: "none",
                }}
              >
                <input
                  type="radio"
                  name="knowledge"
                  value={option.value}
                  checked={knowledgelevel === option.value}
                  onChange={() => setKnowledgelevel(option.value)}
                  style={{ display: "none" }} // hide the radio circle
                />
              </label>
            ))}
          </div>
        </fieldset>
        <button type="submit">Add New Word</button>
        
        <p>{statusMsg}</p>
      </form>
    </div>
  );
}
  
export default AddWord;
