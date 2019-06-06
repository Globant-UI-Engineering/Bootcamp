import React from 'react'
import {deleteRecipe} from "../../store/actions/recipeAction"
import {connect} from "react-redux"

function DeleteRecipe (props){
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.deleteRecipe(props.recipeId)
        props.history.push("/")
    } 
        return (
                <div className="input-field">
                    <button onClick={handleSubmit} className="btn waves-effect waves-teal orange lighten-1 right" id="delete">delete</button>
                </div>
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteRecipe: (recipe) => dispatch(deleteRecipe(recipe))
    }
}
export default connect(null, mapDispatchToProps)(DeleteRecipe);
