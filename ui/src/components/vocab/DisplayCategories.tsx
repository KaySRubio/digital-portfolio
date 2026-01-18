type DisplayCategoriesProps = {
  categories: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
}

const DisplayCategories = ({categories, setSelectedCategory}: DisplayCategoriesProps) => {
  
  return (
    <div>
      <h2>Categories</h2>
       {categories.map((category: string, index) => {
          return (
            <button key={index} onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          );
      })}
    </div>
  ) 
}

export default DisplayCategories;