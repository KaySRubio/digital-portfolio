import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Login from './Login';
import AddWord from './AddWord';
import DisplayCategories from './DisplayCategories';
import DisplayWordsInCategories from './DisplayWordsInCategories';
import type { WordData } from '../../types/vocabTypes';


const firebaseConfig = {
  apiKey: "AIzaSyCsTIjDkD7PbVhwYcManDraDdlUkcLm3YA",
  authDomain: "vocabulario-ff473.firebaseapp.com",
  projectId: "vocabulario-ff473",
  storageBucket: "vocabulario-ff473.firebasestorage.app",
  messagingSenderId: "360325701842",
  appId: "1:360325701842:web:241cbbc8f5f8b8a1130d0b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



const Notecards = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [words, setWords] = useState<WordData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    if(loggedIn) {
      getWords();
    }
  }, [loggedIn])

  // Get a reference to your 'word' collection
  const wordsCollectionRef = collection(db, 'spanish_vocab');
  // Fetch all documents from the collection
  async function getWords() {
    const querySnapshot = await getDocs(wordsCollectionRef);

    // 4. Map the snapshot documents to an array of your WordData
    const wordsArray: WordData[] = querySnapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() as WordData };
    });

    const wordsArrayWithSideToShow = wordsArray.map(word => {
      return { 
        ...word,
        showSpanish: word.knowledgeLevel === 1 ? false : true,
      };
    });
    setWords(wordsArrayWithSideToShow);
  }

  useEffect(() => {
    console.log('words: ', words);
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


  /*
  // Function to get all words 
  
    // Get a reference to your 'word' collection
  const wordsCollectionRef = collection(db, 'word');
  // Fetch all documents from the collection
  async function getWords() {
    const querySnapshot = await getDocs(wordsCollectionRef);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  }

    // Call the function to get your words
  const words = getWords();
  console.log(words);

  */

  /*
// Function to get only words in a specific category
async function getWordsByCategory(categoryName: string) {
    // 1. Get a reference to your 'word' collection
    const wordsCollectionRef = collection(db, 'spanish_vocab');

    // 2. Create a query that filters by the 'category' field
    const q = query(wordsCollectionRef, where('category', '==', categoryName));

    // 3. Execute the query
    const querySnapshot = await getDocs(q);

    // 4. Map the snapshot documents to an array of your WordData
    const wordsArray: WordData[] = querySnapshot.docs.map(doc => {
      // You can also include the document ID if needed:
      // return { id: doc.id, ...doc.data() as WordData };
      return doc.data() as WordData;
    });
    setWords(wordsArray)
    // return wordsArray;
  }
  */