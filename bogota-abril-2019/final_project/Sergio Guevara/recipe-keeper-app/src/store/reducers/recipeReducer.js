const initState = {
    recipes: []
}
const recipeReducer = (state = initState, action) => {
    switch (action.type){
        case "CREATE_RECIPE":
            console.log("created recipe", action.recipe);
            return state;
        case "CREATE_RECIPE_ERROR":
            console.log("create recipe error", action.error)
            return state;
        case "DELETE_RECIPE":
            console.log("delete recipe", action.recipe);
            return state;
        case "DELETE_RECIPE_ERROR":
            console.log("delete recipe error", action.error);
            return state; 
        case "UPDATE_RECIPE":
            console.log("update recipe", action.recipe)
            return state;
        case "UPDATE_RECIPE_ERROR":
            console.log("update recipe error", action.error);
            return state; 
        default: 
            return state;
    }
}
export default recipeReducer;