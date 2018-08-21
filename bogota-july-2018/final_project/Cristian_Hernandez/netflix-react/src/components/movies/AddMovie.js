import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
//import { compose } from 'redux';
//import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import './AddMovie.css';

class AddMovie extends Component {
    state={
        name:'',
        description:'',
        runningTime:'',
        releaseDate:'',
        starring:'',
        genres:'',
        ageRating:''
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newMovie = this.state;

        const { firestore , history} = this.props;

        firestore.add({ collection: 'movies' }, newMovie).then(()=> history.push('/'));
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    
  render() {
    return (
        <div>
            <div className="form-container">
                <div className="back-arrow">
                    <Link to="/"><i className="arrow-back far fa-arrow-alt-circle-left"></i><span className="arrow-back">Back to Browse</span></Link>
                </div>
                
                <div className="form-content-container">
                    <div>                        
                        <h2>Add New Movie</h2>
                    </div>
                    <div className="form-group">
                        <form onSubmit={this.onSubmit} className="form">
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Title</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="e.g. Batman v Superman: Dawn of Justice"
                                    required aria-required="true"
                                    onChange={this.onChange}
                                    value={this.state.name}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="description">Description</label>
                                <textarea 
                                    type="text"
                                    name="description" 
                                    placeholder="e.g. Eighteen months after the battle betwe..."
                                    required aria-required="true"
                                    onChange={this.onChange}
                                    value={this.state.description}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="runningTime">Running time</label>
                                <input 
                                    type="text" 
                                    name="runningTime" 
                                    pattern="[0-9]{1,2}[h]{1} [0-9]{1,2}[m]{1}" 
                                    required aria-required="true"
                                    placeholder="e.g. 2h 10m"
                                    onChange={this.onChange}
                                    value={this.state.runningTime}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="releaseDate">Release date(Year)</label>
                                <input 
                                    type="text" 
                                    name="releaseDate" 
                                    pattern="[0-9]{4}" 
                                    placeholder="e.g. 2015"
                                    required aria-required="true"
                                    onChange={this.onChange}
                                    value={this.state.releaseDate}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="starring">Cast</label>
                                <input 
                                    type="text"
                                    name="starring" 
                                    placeholder="e.g. Henry Cavill, Amy Adams"
                                    required aria-required="true"
                                    onChange={this.onChange}
                                    value={this.state.starring}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="genres">Genres</label>
                                <input 
                                    type="text"
                                    name="genres" 
                                    placeholder="e.g. Science fiction, Drama"
                                    required aria-required="true"
                                    onChange={this.onChange}
                                    value={this.state.genres}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="ageRating">Age Rating</label>
                                <input 
                                    type="text" 
                                    name="ageRating"  
                                    pattern="\+\d{1,2}" 
                                    placeholder="e.g. +16"
                                    required aria-required="true"
                                    onChange={this.onChange}
                                    value={this.state.ageRating}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" value="submit" className="btn btn-movie">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

AddMovie.propTypes={
    firestore: PropTypes.object.isRequired
}

export default firestoreConnect()(AddMovie);