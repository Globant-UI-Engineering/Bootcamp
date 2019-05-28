import React from 'react'
import RecipeSummary from "./RecipeSummary"
import {NavLink}from "react-router-dom"
import "./RecipeSummary.css"

const RecipeList = ({recipes}) => {
    return(
        <article className="recipes">
            { recipes && recipes.map(recipe =>{
                return(
                    <NavLink to={"/recipe/"+ recipe.id} className="recipeSummary">
                        <RecipeSummary recipe={recipe} key={recipe.id}/>
                    </NavLink>
                )
            })}
        </article>
    )
}
export default RecipeList;
