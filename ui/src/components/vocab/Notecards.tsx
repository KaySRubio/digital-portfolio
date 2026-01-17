import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
// import type { FirebaseApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
// import type { FirebaseFirestore } from 'firebase/firestore';
import Login from './Login';



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

// Define an interface for your word data for better type safety
interface WordData {
  category: string;
  english: string;
  spanish: string;
  known: boolean;
}

const Notecards = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [words, setWords] = useState<WordData[]>([])

  /*
  let db: FirebaseFirestore;
  let app: FirebaseApp;
  useEffect(() => {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app)
  }, [])
  */

  useEffect(() => {
    if(loggedIn) {
      getWordsByCategory('body parts');
    }
  }, [loggedIn])

  async function getWordsByCategory(categoryName: string) {
    // 1. Get a reference to your 'word' collection
    const wordsCollectionRef = collection(db, 'word');

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


  return (
    <div>
      <h1>Notecards</h1>
      { loggedIn 
        ?
        <div>
          <p>Logged in with { userEmail }</p>
          {words.map((word: WordData, index) => {
            return (
              <div key={index}>
                  <span>English: {word.english} | </span>
                  <span>Spanish: {word.spanish}</span>
                </div>
            );
          })}
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