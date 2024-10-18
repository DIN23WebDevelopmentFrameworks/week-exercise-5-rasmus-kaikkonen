interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTag(props:IRecipeTagProps) {
    return (
        <div style={{border: "1px solid white", margin: "4px", padding: "5px", width: "100%"}} onClick={() => props.onSelectTag(props.tagName)}>
            {props.tagName}
        </div>
    )
}