import { useState, useEffect } from 'react';
import { updateData } from '../../utils/supabaseRequests';
import type { SupabaseClient } from "@supabase/supabase-js";

import type { WordData, CurrentPage } from '../../types/vocabTypes';


type VocabTermsProps = {
  selectedCategory: string;
  words: WordData[];
  supabase: SupabaseClient;
  setWords: React.Dispatch<React.SetStateAction<WordData[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
  setSelectedWord: React.Dispatch<React.SetStateAction<WordData | null>>;
}

const VocabTerms = ({ selectedCategory, words, supabase, setWords, setCurrentPage, setSelectedWord }: VocabTermsProps) => {
  const [selectedWordId, setSelectedWordId] = useState<string | undefined>(undefined);
  const wordsInCategory = words.filter((word: WordData) => word.category === selectedCategory)
  const [newKnowledgelevel, setNewKnowledgelevel] = useState<number | null>(null);
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [correct, setCorrect] = useState<number | null>(null);


  const [filter, setFilter] = useState<number>(-1);
  const [filteredWords, setFilteredWords] = useState<WordData[] | null>(null);

  const knowledgelevels = [
    { value: -1, color: "white"},
    { value: 0, color: "red"},
    { value: 1, color: "yellow"},
    { value: 2, color: "green"},
  ];

  const options = [
    { label: "I got it!", value: 1, color: "green", textColor: "white" },
    { label: "I missed this one", value: 0, color: "red", textColor: "white" },
  ];

  useEffect(() => {
    const word = wordsInCategory.filter((word: WordData) => word.id === selectedWordId);
    if(!word[0]) return;
    const currentKnowledgelevel = word[0].knowledgelevel;
    let newKnowledgelevel = currentKnowledgelevel;

    if(correct === 1) {
      newKnowledgelevel += 1;
      if (newKnowledgelevel > 2) {
        newKnowledgelevel = 2;
      }
    } else {
      newKnowledgelevel -= 1;
      if (newKnowledgelevel < 0) {
        newKnowledgelevel = 0;
      }
    }
    if(currentKnowledgelevel !== newKnowledgelevel) {
      console.log('updating newKnowledgelevel')
      setNewKnowledgelevel(newKnowledgelevel)
    }
  }, [correct])

  useEffect(() => {
    console.log('newKnowledgelevel was updated to newKnowledgelevel');
    updateKnowledgelevel(newKnowledgelevel)
  }, [newKnowledgelevel, selectedWordId])

  useEffect(() => {
    if(filter < 0) {
      setFilteredWords(wordsInCategory);
    } else {
      const filteredWordsInCategory = wordsInCategory.filter((word: WordData) => word.knowledgelevel === filter);
      setFilteredWords(filteredWordsInCategory);
    }
  }, [filter, words, selectedCategory])

  async function updateKnowledgelevel(newValue: number | null): Promise<void> {
    if(selectedWordId && newKnowledgelevel !== null && newValue !== null) {
      const [ result ] = await updateData(supabase, 'spanish_vocab', selectedWordId, 'knowledgelevel', newValue);
      if(result) {
        // Update the local version too since only query database upon login
        setWords((prevWords) =>
          prevWords.map((word) =>
            word.id === selectedWordId
              ? { ...word, knowledgelevel: newKnowledgelevel }
              : word
          )
        );
        setStatusMsg(`Updated '${selectedWordId}' knowledgelevel to ${newValue}.`);
      } else {
        setStatusMsg(`Failed to update data`);
      }
      setSelectedWordId(undefined);
      setNewKnowledgelevel(null);
      setCorrect(null);
    }
  }

return (
    <div>
      <h2>{selectedCategory}</h2>

      
      <form>
        <fieldset style={{ border: "none", padding: 0 }}>
          <legend>Filter</legend>
          <div style={{ display: "flex", gap: "10px" }}>
            {knowledgelevels.map((level) => (
              <label
                key={level.value}
                style={{
                  backgroundColor: level.color,
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border:
                    filter === level.value
                      ? "3px solid black"
                      : "1px solid gray",
                  userSelect: "none",
                }}
              >
                <input
                  type="radio"
                  name="knowledge"
                  value={level.value}
                  checked={filter === level.value}
                  onChange={() => {
                    const value = level.value;
                    setFilter(value);
                  }}
                  style={{ display: "none" }} // hide the native radio circle
                />
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <h3>Answer:</h3>
      <form>
        <fieldset style={{ border: "none", padding: 0 }}>
          <div style={{ display: "flex", gap: "10px" }}>
            {options.map((option) => (
              <label
                key={option.value}
                style={{
                  backgroundColor: option.color,
                  color: option.textColor,
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border:
                    correct === option.value
                      ? "3px solid black"
                      : "1px solid gray",
                  userSelect: "none",
                }}
              >
                <input
                  type="radio"
                  name="knowledge"
                  value={option.value}
                  checked={correct === option.value}
                  onChange={() => {
                    setCorrect(option.value);
                    setSelectedWord(null);
                  }}
                  style={{ display: "none" }} // hide the radio circle
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
      </form>

      <button>Shuffle</button>
      <button onClick={() => setCurrentPage('Update')}>Fix</button>
      
      <div>
        {filteredWords && filteredWords.map((word: WordData, index: number) => {
          return (
            <button
              key={index}
              onClick={() => {
                setSelectedWordId(word.id);
                setCorrect(null);
                setNewKnowledgelevel(null);
                setSelectedWord(word);

                setWords((prevWords) =>
                  prevWords.map((word1) =>
                    word1.id === word.id
                      ? { ...word1, showSpanish: !word1.showSpanish }
                      : word1
                  )
                );
              }}
            >
              <span>
                {word.showSpanish ? word.spanish : word.english}
              </span>
            </button>
          );
        })}
      </div>


      <p>{statusMsg}</p>
    </div>
  ) 
}
  
export default VocabTerms;