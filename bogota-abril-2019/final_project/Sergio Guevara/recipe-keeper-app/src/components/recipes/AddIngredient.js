import React, {Component} from "react"

class AddIngredient extends Component{
    
    state = {
        ingredient : ""
    }
    handleChange = (event) => {
        this.setState({
            ingredient : event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            ingredient : ""
        });
        this.props.addIngredientToList(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label> Add ingredient by writting the name and pressing the "enter" key</label>
                    <input type="text" onChange={this.handleChange} value={this.state.ingredient} required/>
                </form>
            </div>
        )
    }
}

export default AddIngredient;
