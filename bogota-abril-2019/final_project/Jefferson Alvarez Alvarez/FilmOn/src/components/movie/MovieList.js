import React from "react";
import {ScrollView, View} from 'react-native';
import {Button, ListItem} from 'react-native-elements'

export default class MovieList extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        const urlBase = 'http://image.tmdb.org/t/p/w200'
        return (
            <ScrollView containerStyle={{marginBottom: 20}}>
                {
                    this.props.movies.map((movie, i) => (
                        <View key = {i}>
                            <ListItem
                                leftAvatar={
                                {source:{uri: urlBase + movie.backdrop_path}}}
                                key={movie.id}
                                title={movie.original_title}
                                subtitle={movie.overview}
                            />
                            <Button
                              title="See details"
                              onPress={() =>
                                  navigate('MovieDetails',{ movie: movie })}
                            />
                        </View>
                    ))
                }
            </ScrollView>
        );
    };
};
