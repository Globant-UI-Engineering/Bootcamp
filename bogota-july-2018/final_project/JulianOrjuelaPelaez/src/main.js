import React, {Component} from 'react';
import App from './App';
import Logo from './images/logo'

class Main extends Component {
    render() {
        return(
            <div className = "main-container">
                <App />
                <footer className="footer" >
                    <img src={Logo} className="app-logo" alt="logo" />
                    <p className="footer-text">
                        Built by Julian Andrés Orjuela Pelaez, on behalf of a project holded in  <span className="green upper">Globant</span> UI bootcam 2018
                        all rights reserved
                    </p> 
                </footer>
            </div>
            
        );
    }
}

export default Main;