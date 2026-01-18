
import { useState, useEffect } from 'react';
import Login from './Login';
import AddWord from './AddWord';
import DisplayCategories from './DisplayCategories';
import DisplayWordsInCategories from './DisplayWordsInCategories';
import type { WordData } from '../../types/vocabTypes';
import { createClient } from "@supabase/supabase-js";
import { fetchData } from '../../utils/supabaseRequests';


// Initialize database here works best
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY
);

const Notecards = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);
  const [words, setWords] = useState<WordData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);

  // Check URL params on initial render
  const params = new URLSearchParams(window.location.search);
  const hasTokenHash = params.get("token_hash");

  const [verifying, setVerifying] = useState(!!hasTokenHash);
  const [authError, setAuthError] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(false);

  

  useEffect(() => {
    if(loggedIn) {
      getAndFormatWords();
    }
  }, [loggedIn])



  async function getAndFormatWords() {
    const wordsArray: WordData[] = await fetchData(supabase, 'spanish_vocab');

    const wordsArrayWithSideToShow = wordsArray.map(word => {
      return { 
        ...word,
        showSpanish: word.knowledgelevel === 1 ? false : true,
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
          <p>Logged in with { email }</p>
          <button onClick={getAndFormatWords}>Request Data</button>
          <DisplayCategories categories={categories} setSelectedCategory={setSelectedCategory} />
          <DisplayWordsInCategories selectedCategory={selectedCategory} words={words} supabase={supabase} setWords={setWords} />
          <h2>All Words</h2>
          {words.map((word: WordData, index) => {
            return (
              <div key={index}>
                <span>English: {word.english} | </span>
                <span>Spanish: {word.spanish}</span>
              </div>
            );
          })}
          <AddWord supabase={supabase} categories={categories} setWords={setWords} />
        </div>
        :
        <Login setLoggedIn={setLoggedIn} supabase={supabase} setEmail={setEmail} email={email} />
      }
    </div>
  ) 
}

export default Notecards;
