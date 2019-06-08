import React from "react";
import {NavLink} from 'react-router-dom';
import "./404error.css";

function NoPageMatch (){
    return (
        <article className="container">
            <h2>oops!</h2>
            <img id="gif" src="https://media.giphy.com/media/A5ugHVbuFL3uo/giphy.gif" alt="A gif showing a bowl catching fire after Homer Simpson placed inside it some corn flakes and some milk "></img>
            <h3>404 - page not found</h3>
            <p>We couldn't find the page you were looking for. The link to this page may be incorrect or out of date.</p>
            <NavLink to="/"><button className="btn waves-effect waves-teal pink"> return home</button></NavLink>
        </article>
    )
}
export default NoPageMatch;