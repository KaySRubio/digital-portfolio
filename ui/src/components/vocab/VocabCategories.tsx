import type { CurrentPage, Topic } from '../../types/vocabTypes';

type VocabCategoriesProps = {
  categories: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<CurrentPage>>;
  selectedTopic: Topic;
}

const VocabCategories = ({ categories, setSelectedCategory, setCurrentPage }: VocabCategoriesProps) => {

  // TODO - update which categories are shown based on the topic restriction

  const onClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('Terms');
  }

  return (
    <div className='vocab-category-page'>
      <h2>Categories</h2>
      <div className='vocab-category-area'>
        {categories.map((category: string, index) => {
          return (
            <button className='vocab-category-button' key={index} onClick={() => onClick(category)}>
              {category}
            </button>
          );
      })}
      </div>
    </div>
  )
}
  
export default VocabCategories;