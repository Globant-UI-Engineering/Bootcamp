import React, {Component} from 'react';
import {Platform} from 'react-native';
import {ThemeProvider} from 'react-native-elements';

import MovieList from "./MovieList";
import MovieStore from "../../stores/MovieStore";
import MovieActions from "../../actions/movie/MovieActions";

// Initializing movies
MovieActions.getAllMovies();

let getAppState = () => {
  return { moviesList: MovieStore.getAll() }
};

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = getAppState();
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
        MovieStore.addChangeListener(this._onChange)
    }
    componentWillUnmount() {
        MovieStore.removeChangeListener(this._onChange)
    }
    _onChange() {
        this.setState(getAppState());
    }
    static navigationOptions = {
        title: 'FilmOn - Trending',
    };
    render() {
      return (
        <ThemeProvider>
          <MovieList movies={this.state.moviesList}
                     navigation={this.props.navigation}></MovieList>
        </ThemeProvider>
      );
    }
}
