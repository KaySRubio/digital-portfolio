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
    <div>
      <h2>Categories</h2>
       {categories.map((category: string, index) => {
          return (
            <button key={index} onClick={() => onClick(category)}>
              {category}
            </button>
          );
      })}
    </div>
  )
}
  
export default VocabCategories;