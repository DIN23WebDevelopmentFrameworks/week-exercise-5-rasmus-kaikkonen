import IRecipe from "./IRecipe";
import Recipe from "./Recipe";

interface IRecipeListProps {
    recipes: IRecipe[];
}

export default function RecipeList(props:IRecipeListProps) {
    const content = props.recipes.map((value, index) => {
        return <Recipe recipeData={value} key={index}/>
    }) 

    return(
        <div>
            {content}
        </div>
    )
}