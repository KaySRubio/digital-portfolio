import { useState, useEffect } from 'react';
import { updateData } from '../../utils/supabaseRequests';
import type { SupabaseClient } from "@supabase/supabase-js";
import VocabTermsMenu from './VocabTermsMenu';
import { defaultTags } from '../../data/SampleVocabData';
import type { WordData, CurrentPage, Topic, TableName, CategoryTags } from '../../types/vocabTypes';

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
  const [newSelectedCategory, setNewSelectedCategory]= useState<string>(selectedCategory);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchDefinition, setSearchDefinition] = useState<string>('');
  const [categoryTags, setCategoryTags] = useState<CategoryTags | null>(null);
  const [filteredTags, setFilteredTags] = useState<string[]>([]);

  /* Debugging
  const checkForTagsNotInDefault = () => {
    const defaultTags = Object.values(defaultMLTags).flat();
    wordsInCategory.forEach(word => {
      if(Array.isArray(word.tags)) {
         word.tags?.forEach(tag => {
          if (!defaultTags.includes(tag)) {
            console.log('word:', word, ' has ', tag, ' missing from defaultTags');
          }
        });
      }
    });
  };*/

  useEffect(() => {
    if(Object.keys(defaultTags).includes(selectedCategory)) {
      console.log(defaultTags[selectedCategory]);
      setCategoryTags(defaultTags[selectedCategory]);
    } else {
      setCategoryTags(null);
    }
  }, [selectedCategory])

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
    // checkForTagsNotInDefault();
    if(filter < 0 && !searchTerm && !searchDefinition && filteredTags.length < 1) {
      setFilteredWords(wordsInCategory);
    } else {
      let filteredWords = wordsInCategory;
      if(filter > -1) {
        filteredWords = wordsInCategory.filter((word: WordData) => word.knowledgelevel === filter);
      } 
      if(searchTerm) {
        filteredWords = filteredWords.filter((word: WordData) => word.term.toLowerCase().includes(searchTerm.toLowerCase()))
      }
      if(searchDefinition) {
        filteredWords = filteredWords.filter((word: WordData) => word.definition.toLowerCase().includes(searchDefinition.toLowerCase()))
      }
      if(filteredTags.length > 0) {
        filteredWords = words.filter(word =>
          filteredTags.every(tag => word.tags?.includes(tag))
        );
      }
      setFilteredWords(filteredWords);
    }
  }, [filter, words, selectedCategory, searchTerm, searchDefinition, filteredTags])

  const toggleTag = (tag: string) => {
    setFilteredTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)   // remove
        : [...prev, tag]                // add
    );
  };
  
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
                showTerm: newWordData.knowledgelevel === 1 ? false : true,
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

  return (
    <div className='vocab-terms-page'>
      <VocabTermsMenu
        selectedTable={selectedTable}
        selectedCategory={selectedCategory}
        words={words}
        setWords={setWords}
        setCurrentPage={setCurrentPage}
        filter={filter}
        setFilter={setFilter}
        correct={correct}
        setCorrect={setCorrect}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchDefinition={searchDefinition}
        setSearchDefinition={setSearchDefinition}
      />


      <p className='vocab-terms-page-status-msg'>{statusMsg}</p>
      <div className='vocab-terms-section-and-categories'>
        {categoryTags && <div className='vocab-terms-section-tags'>
          <p>Filter by tag(s):</p>
          {Object.entries(categoryTags).map(([groupName, tags]) => (
            <div key={groupName} className='vocab-terms-section-tags-col'>
              <p>{groupName}</p>
              {tags.map(tag => (
                <button 
                  key={tag}
                  className={`
                    vocab-terms-section-tag-button
                    ${filteredTags.includes(tag) ? 'vocab-terms-section-tag-button-selected' : ''}
                  `}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          ))}
        </div>}

        
        
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
