import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNowInTheaters } from '../../actions/moviesActions';
import InTheatersCard from './InTheatersCard/InTheatersCard';

class InTheatersContainer extends Component {

    componentWillMount(){
        this.props.getNowInTheaters();
    }

    render() {
        return (
            <div className="uk-container uk-container-small">
                <div className="uk-padding uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="true">
                    {Object.keys(this.props.movies).map( movieKey =>(
                        <InTheatersCard key={movieKey}  movie={this.props.movies[movieKey]} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies : state.movies.inteathers
})
 
export default connect(mapStateToProps, {getNowInTheaters}) (InTheatersContainer);
