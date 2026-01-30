
import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
import { logout, fetchValuesInCol, fetchFilteredData } from '../../utils/supabaseRequests.ts';

import VocabHeader from './VocabHeader';
import VocabLogin from './VocabLogin';
import VocabCategories from './VocabCategories';
import VocabTerms from './VocabTerms';
import VocabUpdateTerm from './VocabUpdateTerm';

import { sampleVocabData, defaultSpanishCategories, defaultScienceCategories } from '../../data/SampleVocabData.ts';

import type { Database } from '../../../database.types.ts';
import type { SupabaseClient, Session } from "@supabase/supabase-js";
import type { WordData, Topic, CurrentPage, TableName } from '../../types/vocabTypes.tsx';

// Turn off database during some parts of development
const useSupabase = true;

// Initialize database here works best, catch errors
let supabase: SupabaseClient | null = null;
if(useSupabase) {
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
}

const Notecards = () => {
  const [email, setEmail] = useState<string>('');
  const [words, setWords] = useState<WordData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [session, setSession] = useState<Session | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic>('Spanish');
  const [selectedTable, setSelectedTable] = useState<TableName>('spanish_vocab');
  const [currentPage, setCurrentPage] = useState<CurrentPage>('Categories');
  const [selectedWord, setSelectedWord] = useState<WordData | null>(null);

  useEffect(() => {
    if(session) {
      getCategories();
    }
  }, [session, selectedTable])

  useEffect(() => {
    if(session) {
      getAndFormatWords();
    }
  }, [selectedCategory])

  useEffect(() => {
    console.log('words: ', words);
  }, [words])

  useEffect(() => {
    if(selectedTopic === 'Spanish') {
      setSelectedTable('spanish_vocab');
    } else {
      setSelectedTable('science');
    }
  }, [selectedTopic])

  /*
  useEffect(() => {
    if(selectedTopic === 'Spanish') {
      const dbCategories = words.map(word => word.category);
      const allCategories = [...dbCategories, ...defaultSpanishCategories]
      const uniqueCategories = [...new Set(allCategories)];
      console.log('uniqueCategories from db', uniqueCategories);
      const spanishCategories = uniqueCategories.filter(category => !defaultScienceCategories.includes(category));
      spanishCategories.sort();
      // setCategories(spanishCategories);
    } else {
      // setCategories(defaultScienceCategories);
    }
  }, [words, selectedTopic])
  */

  useEffect(() => {
    setCurrentPage('Categories')
  }, [selectedTopic])

  useEffect(() => {
    setSelectedWord(null);
  }, [currentPage])

  
  async function getCategories() {
    const defaultCategories = selectedTopic === 'Spanish' ? defaultSpanishCategories : defaultScienceCategories;
    if(useSupabase && supabase) {
      const dbCategories = await fetchValuesInCol(supabase, selectedTable, 'category');
      if(dbCategories) {
        const allCategories = [...dbCategories, ...defaultCategories]
        const uniqueCategories = [...new Set(allCategories)];
        console.log('uniqueCategories from db', uniqueCategories);
        uniqueCategories.sort();
        setCategories(uniqueCategories);
        // const finalCategories = uniqueCategories.filter(category => !defaultCategories.includes(category));
      }
    } else {
      setCategories(defaultCategories);
    }
  }
  
  async function getAndFormatWords() {
    let wordsArray: WordData[] | undefined;

    if(useSupabase && supabase) {
      wordsArray = await fetchFilteredData(supabase, selectedTable, 'category', selectedCategory);
    
    } else {
      wordsArray = sampleVocabData;
    }
    if(wordsArray) {
      const wordsArrayWithSideToShow = wordsArray.map(word => {
        return { 
          ...word,
          showTerm: word.knowledgelevel === 1 ? false : true,
        };
      });
      setWords(wordsArrayWithSideToShow);
    }
  }

  const handleLogout = () => {
    setSession(null);
    logout(supabase);
  }

  return (
    <div className='vocab-wrapper'>
      
      <VocabHeader
        loggedIn={session ? true : false}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        getAndFormatWords={getAndFormatWords}
        email={email}
        handleLogout={handleLogout}
        useSupabase={useSupabase}
      />
      {
        (!useSupabase || supabase) &&
        
        ((!useSupabase || session)
        ?
        <div>
          
          {currentPage === 'Categories' && <VocabCategories
            categories={categories}
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={setCurrentPage}
            selectedTopic={selectedTopic}
          />}

          {currentPage === 'Terms' && <VocabTerms
            categories={categories}
            selectedCategory={selectedCategory}
            words={words}
            supabase={supabase}
            selectedTable={selectedTable}
            setWords={setWords}
            setCurrentPage={setCurrentPage}
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
            selectedTopic={selectedTopic}
          />}
          {currentPage === 'Update' && <VocabUpdateTerm 
            supabase={supabase}
            selectedTable={selectedTable}
            categories={categories}
            words={words}
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

/*

          {currentPage === 'Terms' && <VocabTerms
            categories={categories}
            selectedCategory={selectedCategory}
            words={words}
            supabase={supabase}
            selectedTable={selectedTable}
            setWords={setWords}
            setCurrentPage={setCurrentPage}
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
            selectedTopic={selectedTopic}
          />}
          {currentPage === 'Update' && <VocabUpdateTerm 
            supabase={supabase}
            selectedTable={selectedTable}
            categories={categories}
            words={words}
            setWords={setWords}
            selectedWord={selectedWord}
          />}
*/