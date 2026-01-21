import { useState, useEffect } from 'react';
import { updateData } from '../../utils/supabaseRequests';
import type { SupabaseClient } from "@supabase/supabase-js";
import shuffle from '@/assets/svg/shuffle.svg?react';
import edit from '@/assets/svg/edit.svg?react';
import { knowledgelevels } from '../../data/SampleVocabData';

import type { WordData, CurrentPage, Topic } from '../../types/vocabTypes';


type VocabTermsProps = {
  selectedCategory: string;
  words: WordData[];
  supabase: SupabaseClient | null;
  setWords: React.Dispatch<React.SetStateAction<WordData[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
  setSelectedWord: React.Dispatch<React.SetStateAction<WordData | null>>;
  selectedTopic: Topic;
}

const VocabTerms = ({
  selectedCategory,
  words,
  supabase, 
  setWords,
  setCurrentPage,
  setSelectedWord,
  selectedTopic,
}: VocabTermsProps) => {
  const [selectedWordId, setSelectedWordId] = useState<string | undefined>(undefined);
  const wordsInCategory = words.filter((word: WordData) => word.category === selectedCategory)
  const [newKnowledgelevel, setNewKnowledgelevel] = useState<number | null>(null);
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [correct, setCorrect] = useState<number | null>(null);
  const [filter, setFilter] = useState<number>(-1);
  const [filteredWords, setFilteredWords] = useState<WordData[] | null>(null);

  const Shuffle = shuffle;
  const Edit = edit;


  const options = [
    { label: "Got it!", value: 1, color: "green", textColor: "white" },
    { label: "Missed it", value: 0, color: "red", textColor: "white" },
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
    <div className='vocab-terms-page'>
      <div className='vocab-terms-settings-section'>
        <div className='vocab-terms-settings-section-row'>
          <h2>{selectedCategory}</h2>
            <div className='vocab-terms-filter-section'>
            <p>Filter:</p>
            <form>
              <fieldset style={{ border: "none", padding: 0 }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  {knowledgelevels.map((level) => (
                    <label
                      key={level.value}
                      className={`
                        vocab-knowledgelevel-button
                        vocab-knowledgelevel-button-${level.value}
                        ${filter === level.value ? 'selected' : ''}
                      `}

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
          </div>

        </div>
        <div className='vocab-terms-settings-section-row'>
          <div className='vocab-terms-answer-section'>
            <p>Answer:</p>
            <form>
              <fieldset style={{ border: "none", padding: 0 }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  {options.map((option) => (
                    <label
                      key={option.value}
                      className={`vocab-answer-button vocab-answer-button-${option.value}`}
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
          </div>

          <div className='vocab-terms-buttons-section'>
            <button className='vocab-menu-circle-button'>
              <Shuffle className='header-icon' />
            </button>
            <button 
              className='vocab-menu-circle-button'
              onClick={() => setCurrentPage('Update') }
            >
              <Edit className='header-icon' />
            </button>
          </div>
        </div>
      </div>


      
      
      <div className='vocab-terms-section'>
        {filteredWords && filteredWords.map((word: WordData, index: number) => {
          return (
            <button
              className={
                `vocab-term
                ${selectedTopic === 'Spanish' ? 'vocab-term-spanish' : 'vocab-term-science'}
                ${word.showSpanish ? 'vocab-term-es' : 'vocab-term-en'}
              `}
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