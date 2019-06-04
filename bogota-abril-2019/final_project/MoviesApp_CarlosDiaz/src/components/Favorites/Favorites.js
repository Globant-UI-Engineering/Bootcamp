import React, { Component } from 'react';
import {firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import {compose} from 'redux'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Favorites extends Component {

    render() {
        const {users} = this.props;
        let { favorites } = users?users:{};
        return (
        <div className="uk-container uk-container-small uk-margin uk-padding uk-background-default">
            <h3 className="uk-card-title uk-margin-remove-bottom uk-text-center uk-text-uppercase">Favorites</h3>
            <table className="uk-table uk-table-striped uk-padding">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Budget</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        favorites?
                        favorites.map(favorite=>(
                        <tr key ={favorite.movieId}>
                            <td><Link role="link" to={`/movies/${favorite.movieId}`}>{favorite.movieTitle}</Link></td>
                            <td>{favorite.releaseDate}</td>
                            <td>{favorite.budget}</td>
                        </tr>
                        )): 
                        <tr>
                            <td></td>
                            <td></td>
                             <td></td>
                        </tr>
                        }
                    </tbody>
                </table>
        </div>
        );
    }
}

Favorites.propTypes = {
    auth: PropTypes.object.isRequired,
    users: PropTypes.object,
}

export default compose(
    connect((state) => ({
        users: state.firestore.ordered.appUsers && state.firestore.ordered.appUsers[0],
        auth: state.firebase.auth,
    })),
    firestoreConnect(props => {
        return [
            { collection: 'appUsers', where: [['id', '==', props.auth.uid]] }
        ]
    })
)(Favorites);
