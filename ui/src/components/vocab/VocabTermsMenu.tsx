import { useState, useRef, useEffect } from 'react';
import shuffle from '@/assets/svg/shuffle.svg?react';
import edit from '@/assets/svg/edit.svg?react';
import magnifyingGlass from '@/assets/svg/magnifying-glass.svg?react';
import { knowledgelevels } from '../../data/SampleVocabData';
import VocabAddSpecialChar from './VocabAddSpecialChar';

import type { WordData, CurrentPage } from '../../types/vocabTypes';


type VocabTermsMenuProps = {
  selectedTable: string;
  selectedCategory: string;
  words: WordData[];
  setWords: React.Dispatch<React.SetStateAction<WordData[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
  filter: number;
  setFilter: React.Dispatch<React.SetStateAction<number>>;
  correct: number | null;
  setCorrect: React.Dispatch<React.SetStateAction<number | null>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchDefinition: string;
  setSearchDefinition: React.Dispatch<React.SetStateAction<string>>;
}

const VocabTermsMenu = ({
  selectedTable,
  selectedCategory,
  words,
  setWords,
  setCurrentPage,
  filter,
  setFilter,
  correct,
  setCorrect,
  searchTerm,
  setSearchTerm,
  searchDefinition,
  setSearchDefinition,
}: VocabTermsMenuProps) => {
  const [showSearchSection, setShowSearchSection] = useState<boolean>(false);
  const [numOfAllWords, setNumOfAllWords] = useState<number>(0);
  const [numOfKL0Words, setNumOfKL0Words] = useState<number>(0);
  const [numOfKL1Words, setNumOfKL1Words] = useState<number>(0);
  const [numOfKL2Words, setNumOfKL2Words] = useState<number>(0);

  const searchTermRef = useRef<HTMLInputElement>(null);

  const options = [
    { label: "Got it!", value: 1, color: "green", textColor: "white" },
    { label: "Missed it", value: 0, color: "red", textColor: "white" },
  ];
  const Shuffle = shuffle;
  const Edit = edit;
  const MagnifyingGlass = magnifyingGlass;

  function _shuffleArray<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  useEffect(() => {
    console.log(words.length);
    setNumOfAllWords(words.filter((word) => selectedCategory === word.category).length);
    setNumOfKL0Words(words.filter((word) => word.knowledgelevel === 0 && selectedCategory === word.category).length);
    setNumOfKL1Words(words.filter((word) => word.knowledgelevel === 1 && selectedCategory === word.category).length);
    setNumOfKL2Words(words.filter((word) => word.knowledgelevel === 2 && selectedCategory === word.category).length)
  }, [words])

  const shuffleArray = () => {
    const newWords = _shuffleArray(words);
    setWords(newWords);
  }

  const getKnowledgeLevelButtonLabel = (knowledgeLevel: number): number => {
    if(knowledgeLevel === -1) {
      return numOfAllWords;
    } else if(knowledgeLevel === 0) {
      return numOfKL0Words;
    } else if (knowledgeLevel === 1) {
      return numOfKL1Words;
    } else if (knowledgeLevel === 2) {
      return numOfKL2Words
    } else {
      return 0;
    }
  }

  return (
    <div>
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

                    >{getKnowledgeLevelButtonLabel(level.value)}
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
            <button 
              className='vocab-menu-circle-button'
              onClick={() => setShowSearchSection(prev => !prev)}
            >
              <MagnifyingGlass className='header-icon' />
            </button>
          </div>
        </div>
      </div>
      {showSearchSection && <div className='vocab-terms-settings-section-search-row'>
          <div className='vocab-update-form-languages-row'>
          <div className='vocab-update-form-languages-col'>
            <p>{selectedTable === 'spanish_vocab' ? 'Look up Spanish' : 'Filter by keyword in term:'}</p>
            <div>
              <input
                ref={searchTermRef}
                className='vocab-terms-filter-input'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required={true}
                type='text'
              />
            </div>

            {selectedTable === 'spanish_vocab' && <VocabAddSpecialChar 
              onClick={(char) => {
                setSearchTerm(prev => prev+=char);
                requestAnimationFrame(() => {
                  searchTermRef.current?.focus();
                  const len = searchTermRef.current?.value.length ?? 0;
                  searchTermRef.current?.setSelectionRange(len, len);
                });
              }
            }
          />}
          </div>
          
          <div className='vocab-update-form-languages-col'>
            <p>{selectedTable === 'spanish_vocab' ? 'Look up English' : 'Filter by keyword in definition:'}</p>
            <input
              className='vocab-terms-filter-input'
              value={searchDefinition}
              onChange={(e) => setSearchDefinition(e.target.value)}
              required={true}
              type='text'
            />
          </div>
        </div>
      </div>}
    </div>
  ) 
}
  
export default VocabTermsMenu;