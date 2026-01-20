
import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
import { logout, fetchData } from '../../utils/supabaseRequests.ts';

import VocabHeader from './VocabHeader';
import VocabLogin from './VocabLogin';
import VocabCategories from './VocabCategories';
import VocabTerms from './VocabTerms';
import VocabUpdateTerm from './VocabUpdateTerm';

// import { sampleVocabData } from '../../data/SampleVocabData.ts';

import type { Database } from '../../../database.types.ts';
import type { SupabaseClient, Session } from "@supabase/supabase-js";
import type { WordData, Topic, CurrentPage } from '../../types/vocabTypes.tsx';

// Initialize database here works best, catch errors
let supabase: SupabaseClient | null = null;
try {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase env vars missing, notecards program will not run");
  } 
  supabase = createClient<Database>(supabaseUrl, supabaseKey);
} catch (error) {
  console.warn(error);
}


const Notecards = () => {
  const [email, setEmail] = useState<string>('');
  const [words, setWords] = useState<WordData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [session, setSession] = useState<Session | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic>('Spanish');
  const [currentPage, setCurrentPage] = useState<CurrentPage>('Categories');
  const [selectedWord, setSelectedWord] = useState<WordData | null>(null);

  useEffect(() => {
    if(session) {
      getAndFormatWords();
    }
  }, [session])

  async function getAndFormatWords() {
    if(supabase) {
      const wordsArray: WordData[] | undefined = await fetchData(supabase, 'spanish_vocab');
      // DEBUG - use sample data rather than query database over and over during development
      // const wordsArray: WordData[] = sampleVocabData;
        
      
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
  }

  useEffect(() => {
    const allCategories = words.map(word => word.category);
    const uniqueCategories = [...new Set(allCategories)];
    setCategories(uniqueCategories);
  }, [words])

  const handleLogout = () => {
    setSession(null);
    logout(supabase);
  }

  useEffect(() => {
    setSelectedWord(null);
  }, [currentPage])

  return (
    <div>
      
      <VocabHeader
        loggedIn={session ? true : false}
        setSelectedTopic={setSelectedTopic} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        getAndFormatWords={getAndFormatWords}
        email={email}
        handleLogout={handleLogout}
      />
      {
        supabase &&
        
        (session
        ?
        <div>
          {currentPage === 'Categories' && <VocabCategories
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={setCurrentPage}
            selectedTopic={selectedTopic}
          />}

          {currentPage === 'Terms' && <VocabTerms 
            selectedCategory={selectedCategory}
            words={words}
            supabase={supabase}
            setWords={setWords}
            setCurrentPage={setCurrentPage}
            setSelectedWord={setSelectedWord}
          />}
          {currentPage === 'Update' && <VocabUpdateTerm 
            supabase={supabase}
            categories={categories}
            setWords={setWords}
            selectedWord={selectedWord}
          />}
          
          

          {/*DEBUGGING: words.map((word: WordData, index) => {
            return (
              <div key={index}>
                <span>English: {word.english} | </span>
                <span>Spanish: {word.spanish}</span>
              </div>
            );
          })*/}
          
        </div>
        :
        <VocabLogin supabase={supabase} setEmail={setEmail} email={email} setSession={setSession} />
        )
      }
      
    </div>
  ) 
}

export default Notecards;
