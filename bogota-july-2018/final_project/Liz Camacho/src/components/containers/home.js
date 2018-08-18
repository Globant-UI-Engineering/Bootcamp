import React, { Component } from 'react';
import Movies from "./movies";
import Search from "../views/search";
import { connect } from "react-redux";
import actions from "../../actions/action";
import "./home.css";

const mapStateToProps = state => {
    return {
        movieSearchState: state.moviesReducer,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        getSearchMoviesListAPI: (value) => dispatch(actions.getSearchMoviesListAPI(value))
    }
}

class Home extends Component {
    state = {
        inputSearch: "",
    }

    handleInputValue = (searchInputValue) => {
        var value;
        value = searchInputValue !== null ? searchInputValue : "";
        this.setState({ inputSearch: value });
    }
    render() {
        const { searchMovie } = this.props.movieSearchState;
        const { getSearchMoviesListAPI } = this.props;
        const { inputSearch } = this.state;

        return (
            <main className="generalContainer containerHome">
                <Search onSearchMovie={getSearchMoviesListAPI} onGetInputValue={this.handleInputValue} />
                <Movies searchMovie={searchMovie} searchInputValue={inputSearch} />
            </main>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
