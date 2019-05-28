import React, { Component } from 'react'
import {connect} from "react-redux"
import {firestoreConnect} from "react-redux-firebase"
import {compose} from "redux"
import AddIngredient from "./AddIngredient"
import {updateRecipe} from "../../store/actions/recipeAction"

class UpdateRecipe extends Component {
    constructor(props){
        super(props);
        const {recipe}= this.props;
        this.state= {
            title:recipe.title,
            preparation:recipe.preparation,
            preptime: recipe.preptime,
            cooktime: recipe.cooktime,
            servings: recipe.servings,
            ingredients: recipe.ingredients
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })   
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const recipeId = this.props.match.params.id;
        this.props.updateRecipe(recipeId,this.state)
        this.props.history.push("/");
    } 
    addIngredientToList = (newIngredient) => {
        newIngredient.id = this.state.ingredients.length+1;
        this.setState({
          ingredients: this.state.ingredients.concat(newIngredient)
        }) 
    }
    deleteIngredient = (id) =>{
        let ingredients = this.state.ingredients.filter(item => {
            return item.id !== id
        });
        this.setState({
            ingredients: ingredients
        })
    }
    render() {
    const ingredients = this.state.ingredients
    const listOfIngredients = ingredients.map( item => {
        return (
            <div key={item.id} >
                <div className="chip blue white-text" onClick={()=>{this.deleteIngredient(item.id)}}>{item.ingredient}<i className="close material-icons">close</i></div>
            </div>
        )
    })
        return (
        <article className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <div className="input-field">
                    <button className="btn waves-effect waves-teal pink right" id="update">save</button>
                </div>
                <h5 className="grey-text text-darken-3">Update Recipe</h5>
                <br/>
                <div className="input-field">
                    <label htmlFor="title" className="active">Recipe Title</label>
                    <input className="validate" type="text" id="title" onChange={this.handleChange} value={this.state.title} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="preparation" className="active">Preparation</label>
                    <textarea className="materialize-textarea validate" id="preparation" onChange={this.handleChange} value={this.state.preparation} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="preptime" className="active">Preparation Time (Hours-Minutes)</label>
                    <input  type="time" className="validate" id="preptime" onChange={this.handleChange} value={this.state.preptime} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="cooktime" className="active">Cook Time</label>
                    <input type="time" className="validate" id="cooktime" onChange={this.handleChange} value={this.state.cooktime} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="servings" className="active">Servings</label>
                    <input className="validate" type="text" id="servings" onChange={this.handleChange} value={this.state.servings} required/>
                </div>
            </form>
            <AddIngredient addIngredientToList={this.addIngredientToList.bind(this)}/>
            <div>{listOfIngredients}</div>
        </article>
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
const mapDispatchToProps = (dispatch) => {
    
    return {
        updateRecipe: (recipeId, recipe) => dispatch(updateRecipe(recipeId, recipe))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: "recipes"}
    ])
)(UpdateRecipe);

