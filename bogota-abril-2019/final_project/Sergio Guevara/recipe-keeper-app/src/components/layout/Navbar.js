import React from 'react';
import {NavLink} from 'react-router-dom';
import NewRecipeLink from "./NewRecipeLink"
import Logo from "../../Logo_recipe_keeper.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={Logo} alt="logo: a frying pan with a note inside"></img>
            <NavLink to="/" className="navlink">Recipe Keeper</NavLink>
            <NewRecipeLink/>
        </nav>
    )
}
export default Navbar;
