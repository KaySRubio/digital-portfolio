import { useState, useEffect } from 'react';
import type { WordData } from '../../types/vocabTypes';
import { updateData } from '../../utils/firebaseRequests';
import type { Firestore } from 'firebase/firestore';

type DisplayWordsInCategoriesProps = {
  selectedCategory: string;
  words: WordData[];
  db: Firestore;
  setWords: React.Dispatch<React.SetStateAction<WordData[]>>;
}

const DisplayWordsInCategories = ({selectedCategory, words, db, setWords}: DisplayWordsInCategoriesProps) => {
  const [selectedWordId, setSelectedWordId] = useState<string | undefined>(undefined);
  const wordsInCategory = words.filter((word: WordData) => word.category === selectedCategory)
  const [newKnowledgeLevel, setNewKnowledgeLevel] = useState<number | null>(null);
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [correct, setCorrect] = useState<number | null>(null);

  
  const [filter, setFilter] = useState<number>(-1);
  const [filteredWords, setFilteredWords] = useState<WordData[] | null>(null);

  const knowledgeLevels = [
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
    const currentKnowledgeLevel = word[0].knowledgeLevel;
    let newKnowledgeLevel = currentKnowledgeLevel;

    if(correct === 1) {
      newKnowledgeLevel += 1;
      if (newKnowledgeLevel > 2) {
        newKnowledgeLevel = 2;
      }
    } else {
      newKnowledgeLevel -= 1;
      if (newKnowledgeLevel < 0) {
        newKnowledgeLevel = 0;
      }
    }
    if(currentKnowledgeLevel !== newKnowledgeLevel) {
      console.log('updating newKnowledgeLevel')
      setNewKnowledgeLevel(newKnowledgeLevel)
    }
  }, [correct])

  useEffect(() => {
    console.log('newKnowledgeLevel was updated to newKnowledgeLevel');
    updateKnowledgeLevel(newKnowledgeLevel)
  }, [newKnowledgeLevel, selectedWordId])

  useEffect(() => {
    if(filter < 0) {
      setFilteredWords(wordsInCategory);
    } else {
      const filteredWordsInCategory = wordsInCategory.filter((word: WordData) => word.knowledgeLevel === filter);
      setFilteredWords(filteredWordsInCategory);
    }
  }, [filter, words, selectedCategory])

  async function updateKnowledgeLevel(newValue: number | null): Promise<void> {
    console.log('function called');
    if(selectedWordId && newKnowledgeLevel !== null) {

      try {
        await updateData(db, 'spanish_vocab', selectedWordId, 'knowledgeLevel', newValue);
        // Update the local version too since only query database upon login
        setWords((prevWords) =>
          prevWords.map((word) =>
            word.id === selectedWordId
              ? { ...word, knowledgeLevel: newKnowledgeLevel }
              : word
          )
        );

        setStatusMsg(`Updated '${selectedWordId}' knowledgeLevel to ${newValue}.`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setStatusMsg(`Failed to update data`);
        console.warn(error);
      }
      setSelectedWordId(undefined);
      setNewKnowledgeLevel(null);
      setCorrect(null);
    }
  }

  return (
    <div>
      <h2>{selectedCategory}</h2>

      <form>
        <fieldset style={{ border: "none", padding: 0 }}>
          <legend>Knowledge Level</legend>
          <div style={{ display: "flex", gap: "10px" }}>
            {knowledgeLevels.map((level) => (
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
      <p>Filtered Words</p>
      {filteredWords && filteredWords.map((word: WordData, index: number) => {
        return (
          <button
            key={index}
            onClick={() => {
              setSelectedWordId(word.id);
              setCorrect(null);
              setNewKnowledgeLevel(null);

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
                  }}
                  style={{ display: "none" }} // hide the radio circle
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>
      </form>
      <p>{statusMsg}</p>
    </div>
  ) 
}

export default DisplayWordsInCategories;
