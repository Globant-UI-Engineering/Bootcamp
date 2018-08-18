import React, { Component } from 'react';
import "./search.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.handlSearchMovie = this.handlSearchMovie.bind(this);
    }

    handlSearchMovie() {
        let value = document.getElementById('searchInput').value;
        this.props.onSearchMovie(value);
        this.props.onGetInputValue(value);
    }

    render() {
        return (
            <div className="input-group input-group-lg search">
                <input type="search" className="form-control" id="searchInput" aria-label="Search movie" onKeyUp={this.handlSearchMovie} autoComplete="off" />
                <button className="input-group-text btn" >
                    <svg width="26" height="28">
                        <path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zm8 13c0 1.094-.906 2-2 2a1.96 1.96 0 0 1-1.406-.594l-5.359-5.344a10.971 10.971 0 0 1-6.234 1.937c-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-.672 4.406-1.937 6.234l5.359 5.359c.359.359.578.875.578 1.406z" />
                    </svg>
                </button>
            </div>
        );
    }
}
export default Search;