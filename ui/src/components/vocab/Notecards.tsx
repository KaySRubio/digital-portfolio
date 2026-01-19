
import { useState, useEffect } from 'react';
import Login from './Login';
import AddWord from './AddWord';
import DisplayCategories from './DisplayCategories';
import DisplayWordsInCategories from './DisplayWordsInCategories';
import type { WordData } from '../../types/vocabTypes';
import { createClient } from "@supabase/supabase-js";
import { fetchData, logout } from '../../utils/supabaseRequests';
import type { Database } from '../../../database.types.ts';
import type { Session } from "@supabase/supabase-js";

// Initialize database here works best
const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY
);

const Notecards = () => {
  const [email, setEmail] = useState<string>('');
  const [words, setWords] = useState<WordData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    if(session) {
      getAndFormatWords();
    }
  }, [session])

  async function getAndFormatWords() {
    const wordsArray: WordData[] | undefined = await fetchData(supabase, 'spanish_vocab');
    if(wordsArray) {
      const wordsArrayWithSideToShow = wordsArray.map(word => {
        return { 
          ...word,
          showSpanish: word.knowledgelevel === 1 ? false : true,
        };
      });
      setWords(wordsArrayWithSideToShow);
    }
  }

  useEffect(() => {
    const allCategories = words.map(word => word.category);
    const uniqueCategories = [...new Set(allCategories)];
    setCategories(uniqueCategories);
  }, [words])

  const handleLogout = () => {
    logout(supabase);
    setSession(null);
  }

  return (
    <div>
      <h1>Notecards</h1>
      { session
        ?
        <div>
          <p>Logged in with { email }</p>
          <button onClick={handleLogout}>Logout</button>
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
        <Login supabase={supabase} setEmail={setEmail} email={email} setSession={setSession} />
      }
    </div>
  ) 
}

export default Notecards;
