import React from "react";
import { ScrollView } from 'react-native';
import { Tile, Text, Divider, Rating } from 'react-native-elements';

export default class MovieDetails extends React.Component {
    static navigationOptions = {
        title: 'Detail of the film',
    };
    render() {
        const { navigation } = this.props;
        const movie = navigation.getParam('movie');
        const baseUrl = 'http://image.tmdb.org/t/p/w500';
        return (
            <ScrollView>
                <Tile
                    imageSrc={{ uri: baseUrl + movie.backdrop_path }}
                    title={movie.original_title}
                    featured
                    caption={movie.release_date}
                />
                <Text >Overview: {movie.overview}</Text>
                <Divider/>
                <Text >Total votes: {movie.vote_count}</Text>
                <Rating showRating
                        fractions={1}
                        startingValue={movie.vote_average/2}
                        readonly />
            </ScrollView>
        );
    };
};
