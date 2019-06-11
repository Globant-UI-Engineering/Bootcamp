/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {createStackNavigator, createAppContainer} from 'react-navigation';

// Movies
import MovieIndex from "./src/components/movie/MovieIndex";
import MovieDetails from "./src/components/movie/MovieDetails";

const MainNavigator = createStackNavigator({
    Home: {screen: MovieIndex},
    MovieDetails: {screen: MovieDetails},
});

const App = createAppContainer(MainNavigator);

export default App;