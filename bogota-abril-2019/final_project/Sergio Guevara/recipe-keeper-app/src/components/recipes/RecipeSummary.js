import React from 'react';
import "./RecipeSummary.css";

const RecipeSummary = ({recipe}) => {
    return (
            <section className="recipe_summary">
                <h2>{recipe.title}</h2>
                <ul>
                <li>preparation time: {recipe.preptime}</li>
                <li>cook time: {recipe.cooktime}</li>
                <li>number of servings: {recipe.servings}</li>
                </ul>
            </section>
    )
}
export default RecipeSummary;
