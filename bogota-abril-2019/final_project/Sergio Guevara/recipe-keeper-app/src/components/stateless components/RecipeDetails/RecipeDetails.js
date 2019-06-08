import React from 'react'
import {connect} from "react-redux"
import {firestoreConnect} from "react-redux-firebase"
import {compose} from "redux"
import "./RecipeDetails.css"
import DeleteRecipe from "../DeleteRecipe/DeleteRecipe"
import NoPageMatch from '../404error/404error'

import {NavLink} from "react-router-dom"

function RecipeDetails(props) {
    const {recipe} = props;
    const recipeId = props.match.params.id; 
    const history = props.history;
    if (recipe) {
        let listOfIngredients = recipe.ingredients.map( item => {
            return (
                <div key={item.id}>
                <li>{item.ingredient}</li>
                </div>
            )
        });
        return (
                <article className="recipe_section">
                    <DeleteRecipe recipeId={recipeId} history={history}/>
                    <NavLink className="btn waves-effect waves-teal pink right" to={`/update/${recipeId}`}>update</NavLink>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.preparation}</p>
                    <h3>Preparation Time</h3>
                    <time>{recipe.preptime}</time>
                    <h3>Cook Time</h3>
                    <time>{recipe.cooktime}</time>
                    <h3>Number of Servings</h3>
                    <p>{recipe.servings}</p>
                    <h3>Ingredients</h3>
                    <ul>
                        {listOfIngredients}
                    </ul>
                </article>
        )
    } else{
        return(
            <NoPageMatch/>
        )
    } 
}

const mapStateToProps = (state, ownProps) => {

    const id = ownProps.match.params.id;
    const recipes = state.firestore.data.recipes;
    const recipe = recipes ? recipes[id] : null
    return {
        recipe : recipe
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: "recipes"}
    ])
)(RecipeDetails);
