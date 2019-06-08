import React from 'react'
import RecipeSummary from "../RecipeSummary/RecipeSummary"
import {NavLink}from "react-router-dom"
import "./RecipeList.css"


const RecipeList = ({recipes}) => {

    return(
        <article className="recipes">
            { recipes && recipes.map(renderRecipeSummary)}
        </article>
    )
}
const renderRecipeSummary = recipe => {
    return (
        <NavLink to={"/recipe/"+ recipe.id} className="recipeSummary">
            <RecipeSummary recipe={recipe} key={recipe.id}/>
        </NavLink>
    )
}

export default RecipeList;

