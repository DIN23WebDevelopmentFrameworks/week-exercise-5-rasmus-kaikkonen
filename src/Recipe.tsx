import IRecipe from "./IRecipe";

interface IRecipeProps {
    recipeData: IRecipe;
}

export default function Recipe(props:IRecipeProps) {
    return(
        <div>
            <h2>{props.recipeData.name}</h2>
            <img src={props.recipeData.image} alt={props.recipeData.name}></img>
            <p><b>Ingredients:</b></p>
            <ul>
                {props.recipeData.ingredients.map((value, index) => { return <li key={index}>{value}</li> })}
            </ul>
            <p><b>Instructions:</b></p>
            <ol>
                {props.recipeData.instructions.map((value, index) => {return <li key={index}>{value}</li> })}
            </ol>
        </div>
    )
}