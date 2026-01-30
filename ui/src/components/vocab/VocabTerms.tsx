import { useState, useEffect } from 'react';
import { updateData } from '../../utils/supabaseRequests';
import type { SupabaseClient } from "@supabase/supabase-js";
import shuffle from '@/assets/svg/shuffle.svg?react';
import edit from '@/assets/svg/edit.svg?react';
import { knowledgelevels } from '../../data/SampleVocabData';

import type { WordData, CurrentPage, Topic, TableName } from '../../types/vocabTypes';


type VocabTermsProps = {
  selectedCategory: string;
  words: WordData[];
  supabase: SupabaseClient | null;
  setWords: React.Dispatch<React.SetStateAction<WordData[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
  selectedWord: WordData | null;
  setSelectedWord: React.Dispatch<React.SetStateAction<WordData | null>>;
  selectedTopic: Topic;
  selectedTable: TableName;
  categories: string[];
}

const VocabTerms = ({
  selectedCategory,
  words,
  supabase, 
  setWords,
  setCurrentPage,
  selectedWord,
  setSelectedWord,
  selectedTopic,
  selectedTable,
  categories,
}: VocabTermsProps) => {
  const defaultStatusMsg = 'Click on a word!';
  const wordsInCategory = words.filter((word: WordData) => word.category === selectedCategory)
  const [statusMsg, setStatusMsg] = useState<string>(defaultStatusMsg);
  const [correct, setCorrect] = useState<number | null>(null);
  const [filter, setFilter] = useState<number>(0);
  const [filteredWords, setFilteredWords] = useState<WordData[] | null>(null);
  const [newSelectedCategory, setNewSelectedCategory]= useState<string>(selectedCategory)

  const Shuffle = shuffle;
  const Edit = edit;


  const options = [
    { label: "Got it!", value: 1, color: "green", textColor: "white" },
    { label: "Missed it", value: 0, color: "red", textColor: "white" },
  ];

  useEffect(() => {
    if(!selectedWord) return;
    const currentKnowledgelevel = selectedWord.knowledgelevel;
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
    if(currentKnowledgelevel !== newKnowledgelevel || selectedCategory !== newSelectedCategory) {
      console.log('updating newKnowledgelevel and/or selected category')
      const newWordData = {
        ...selectedWord,
        category: newSelectedCategory,
        knowledgelevel: newKnowledgelevel,
      }
      setSelectedWord(newWordData);
      _updateData(newWordData);
    }

  }, [correct])

  useEffect(() => {
    if(filter < 0) {
      setFilteredWords(wordsInCategory);
    } else {
      const filteredWordsInCategory = wordsInCategory.filter((word: WordData) => word.knowledgelevel === filter);
      setFilteredWords(filteredWordsInCategory);
    }
  }, [filter, words, selectedCategory])

  
  async function _updateData(newWordData: WordData): Promise<void> {
    if(!newWordData) return;
    const [ result ] = await updateData(supabase, selectedTable, newWordData);
    if(result) {
        // Update the local version too since only query database upon login
        setWords((prevWords) =>
          prevWords.map((word) =>
            word.id === newWordData.id
              ? { 
                ...word,
                knowledgelevel: newWordData.knowledgelevel,
                category: newWordData.category,
                showTerm: newWordData.knowledgelevel === 1 ? false : true
              }
              : word
          )
        );
        setStatusMsg(`Updated '${newWordData.id}' knowledgelevel to ${newWordData.knowledgelevel} and category ${newSelectedCategory}.`);
      } else {
        setStatusMsg(`Failed to update data`);
      }
      setSelectedWord(null);
      setCorrect(null);
  }
  
  function _shuffleArray<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  } 

  const shuffleArray = () => {
    const newWords = _shuffleArray(words);
    setWords(newWords);
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
                        style={{ display: "none" }}
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
                        }}
                        style={{ display: "none" }}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>
            </form>
          </div>

          <div className='vocab-terms-buttons-section'>
            <button className='vocab-menu-circle-button' onClick={shuffleArray}>
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
      <p className='vocab-terms-page-status-msg'>{statusMsg}</p>
      <div className='vocab-terms-section-and-categories'>
        
        {selectedCategory === 'uncategorized' && <div className='vocab-terms-section-categories'>
          <p>Pick a category:</p>
          {categories.map((category, index) => (
            
            <button 
              className={`
                vocab-terms-section-category-button 
                ${newSelectedCategory === category ? 'vocab-terms-section-category-button-selected' : ''}
              `}
              key={index}
              onClick={() => setNewSelectedCategory(category)}
            >
            {category}
            </button>
           
          ))}
        </div>}
        <div className='vocab-terms-section-terms'>
          {filteredWords && filteredWords.map((word: WordData, index: number) => {
            return (
              <button
                className={
                  `vocab-term
                  ${selectedTopic === 'Spanish' ? 'vocab-term-spanish' : 'vocab-term-science'}
                  ${word.showTerm ? 'vocab-term-es' : 'vocab-term-en'}
                `}
                key={index}
                onClick={() => {
                  setSelectedWord(word);
                  setCorrect(null);
                  setSelectedWord(word);

                  setWords((prevWords) =>
                    prevWords.map((word1) =>
                      word1.id === word.id
                        ? { ...word1, showTerm: !word1.showTerm }
                        : word1
                    )
                  );
                }}
              >
                <span>
                  {word.showTerm ? word.term : word.definition}
                </span>
              </button>
            );
          })}
        </div>

      </div>
      
    </div>
  ) 
}
  
export default VocabTerms;