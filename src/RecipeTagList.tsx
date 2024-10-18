import RecipeTag from "./RecipeTag";

interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTagList(props:IRecipeTagListProps) {
    const recipeTagList = props.tagList.map((value, index) => {return <RecipeTag tagName={value} key={index} onSelectTag={props.onSelectTag}/>});

    return(
        <div>
            <p>Choose a tag below</p>
            {recipeTagList}
        </div>
    )
}