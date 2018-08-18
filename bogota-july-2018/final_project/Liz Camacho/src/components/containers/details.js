import React, { Component } from 'react';
import { connect } from "react-redux";
import actions from "../../actions/action";
import { Button, Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";
import noImage from "../../assets/img/no-image.png";
import Loading from "../views/loading";
import "./details.css";

const mapStateToProps = state => {
    return {
        movieState: state.moviesReducer,

    }
};
const mapDispatchToProps = dispatch => {
    return {
        getMovieInfo: (id) => dispatch(actions.getMovieInfo(id)),
    }
};

class Details extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getMovieInfo(id);
    }

    render() {
        const { movieInfo, inProgressMovieInfo } = this.props.movieState;
        const { poster_path, title, overview, release_date, vote_count, vote_average } = movieInfo;
        const imageURL = poster_path !== null ? `https://image.tmdb.org/t/p/w300${poster_path}` : noImage;

        if (inProgressMovieInfo) {
            return (
                <Loading />
            );
        }
        // console.log(this.props.movieState)
        return (
            <main className="generalContainer">
                <Jumbotron>
                    <article>
                        <header>
                            <h1 className="display-3">{title}</h1>
                        </header>
                        <div className="detailContainer">
                            <div className="details">
                                <img src={imageURL} alt={title} />
                            </div>
                            <div className="details">
                                <p className="lead">{overview}</p>
                                <hr className="my-2" />
                                <p><small><strong>Release date: </strong><span>{release_date}</span></small></p>
                                <p><small><strong>Vote count: </strong><span>{vote_count}</span></small></p>
                                <p><small><strong>Vote average: </strong><span>{vote_average}</span></small></p>
                                <p><small><strong>Genres: </strong>
                                    {movieInfo.genres.map((data) =>
                                        <span key={data.id}> {data.name}, </span>
                                    )}
                                </small></p>
                            </div>
                        </div>
                        <hr className="my-2" />
                        <Link to={"/"} > <Button outline color="danger" size="lg">Return</Button></Link>
                    </article>
                </Jumbotron>
            </main>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Details);