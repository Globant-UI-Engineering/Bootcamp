import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./Logo_recipe_keeper.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header>
        <nav className="header">
            <ul className="navlinks"> 
                <li><NavLink to="/"><img src={Logo} alt="App logo Home. logo description: the name is 'recipe Keeper' and the icon is a frying pan with a recipe written in a little paper inside "></img></NavLink></li>
                <li><NavLink to="/create" id="create_recipe">New Recipe</NavLink></li>
            </ul>
        </nav>
        </header>
    )
}
export default Navbar;
