import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <Link to="/">
                    <img alt="Bobba" src="/web-gallery/images/ghosthead.png" />
                    <h1>Bobba</h1>
                </Link>
            </div>
        );
    }
}

export default Logo;