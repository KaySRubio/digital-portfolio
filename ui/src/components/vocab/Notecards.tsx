import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Login from './Login';
import AddWord from './AddWord';
import DisplayCategories from './DisplayCategories';
import DisplayWordsInCategories from './DisplayWordsInCategories';
import type { WordData } from '../../types/vocabTypes';
import { config, fetchData } from '../../utils/firebaseRequests';

// Initialize database here works best
const app = initializeApp(config);
const db = getFirestore(app)

const Notecards = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [words, setWords] = useState<WordData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    if(loggedIn) {
      getAndFormatWords();
    }
  }, [loggedIn])



  async function getAndFormatWords() {
    const wordsArray: WordData[] = await fetchData(db, 'spanish_vocab')

    const wordsArrayWithSideToShow = wordsArray.map(word => {
      return { 
        ...word,
        showSpanish: word.knowledgeLevel === 1 ? false : true,
      };
    });
    setWords(wordsArrayWithSideToShow);
  }

  useEffect(() => {
    const allCategories = words.map(word => word.category);
    const uniqueCategories = [...new Set(allCategories)];
    setCategories(uniqueCategories);
  }, [words])

  return (
    <div>
      <h1>Notecards</h1>
      { loggedIn 
        ?
        <div>
          <p>Logged in with { userEmail }</p>
          <DisplayCategories categories={categories} setSelectedCategory={setSelectedCategory} />
          <DisplayWordsInCategories selectedCategory={selectedCategory} words={words} db={db} setWords={setWords} />
          <h2>All Words</h2>
          {words.map((word: WordData, index) => {
            return (
              <div key={index}>
                <span>English: {word.english} | </span>
                <span>Spanish: {word.spanish}</span>
              </div>
            );
          })}
          <AddWord db={db} categories={categories} setWords={setWords} />
        </div>
        :
        <Login setLoggedIn={setLoggedIn} app={app} setUserEmail={setUserEmail} />
      }
    </div>
  ) 
}

export default Notecards;
