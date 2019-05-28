import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navbar.css";

const NewRecipeLink = () => {
    return (
        <div>
            <NavLink to="/create" className="create_recipe">New Recipe</NavLink>
        </div>
    )
}
export default NewRecipeLink;
