import React, { Component } from 'react'
import AddIngredient from "./AddIngredient"
import {createRecipe} from "../../store/actions/recipeAction"
import {connect} from "react-redux"

class CreateRecipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:"",
            preparation:"",
            preptime: "",
            cooktime: "",
            servings:"",
            ingredients:[]
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })   
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createRecipe(this.state)
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
                        <button className="btn waves-effect waves-teal pink right" id="save">save recipe</button>
                    </div>
                    <h5 className="grey-text text-darken-3">New Recipe</h5>
                    <div className="input-field">
                        <label htmlFor="title">Recipe Title</label>
                        <input className="validate" type="text" id="title" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="preparation">Preparation</label>
                        <textarea className="materialize-textarea validate" id="preparation" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="preptime" className="active">Preparation Time (Hours-Minutes)</label>
                        <input  type="time" className="validate" id="preptime" placeholder="00:00" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="cooktime" className="active">Cook Time</label>
                        <input type="time" className="validate" id="cooktime" placeholder="00:00" onChange={this.handleChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="servings">Servings</label>
                        <input className="validate" type="text" id="servings" onChange={this.handleChange} required/>
                    </div>
                </form>
                <AddIngredient addIngredientToList={this.addIngredientToList.bind(this)}/>
                <div>{listOfIngredients}</div>
            </article>
        )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createRecipe: (recipe) => dispatch(createRecipe(recipe))
    }
}

export default connect(null, mapDispatchToProps)(CreateRecipe);
