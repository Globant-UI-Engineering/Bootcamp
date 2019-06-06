import React, {Component} from 'react'
import RecipeList from "../RecipeList"
import {connect} from "react-redux"
import {firestoreConnect} from "react-redux-firebase"
import {compose} from "redux"

class Dashboard extends Component {
    render(){
        const {recipes} = this.props;
        return (
            <article>
                <RecipeList recipes={recipes}/>
            </article>
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.firestore.ordered.recipes
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "recipes"}
    ])
)(Dashboard);

