import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";
import { useEffect, useState } from "react";

const App = () => {
  const [recipeTagList, setRecipeTagList] = useState([]);
  const [currentTag, setCurrentTag] = useState<string>();
  const [recipes, setRecipes] = useState<[]>([]);

  useEffect(() => {
      fetch("https://dummyjson.com/recipes/tags").then((res) => {
        return res.json();
      }).then((data) => {
        console.log(data);
        setRecipeTagList(data);
      })
  }, []);

  const fetchRecipes = (tagName:string) => {
      fetch(`https://dummyjson.com/recipes/tag/${tagName}`).then((res) => {
        return res.json();
      }).then((data) => {
        console.log(data.recipes);
        setRecipes(data.recipes);
      })    
  }

  const onSelectTag = (tagName:string) => {
    setCurrentTag(tagName);
    console.log("Current tag is " + tagName);
    fetchRecipes(tagName);
  }

  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        {currentTag && <h2>Recipes for {currentTag}</h2>}
        {currentTag ? (
          <div>
            <button onClick={() => setCurrentTag(undefined)}>Back</button>
            <RecipeList recipes={recipes}/>
          </div>
        ) : (
          <div>
            <RecipeTagList tagList={recipeTagList} onSelectTag={onSelectTag}/>
          </div>
        )
      }
    </div>
  );
};

export default App;
