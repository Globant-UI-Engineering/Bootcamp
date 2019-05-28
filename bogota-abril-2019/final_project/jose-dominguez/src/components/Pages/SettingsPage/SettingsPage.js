import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../Generic/Footer';
import Navigator from '../../Navigator/Navigator';
import LoggedRedirectorContainer from '../../../containers/LoggedRedirectorContainer';
import HeaderContainer from '../../../containers/HeaderContainer';

class SettingsPage extends React.Component {

    render() {
        return (
            <div className="generic">
                <LoggedRedirectorContainer />
                <HeaderContainer />
                <Navigator />
                <div className="column_container">
                    <article className="left_column">
                        <h1 className="blue">Contenido</h1>
                    </article>
                    <article className="right_column">
                        <h1 className="green">Información</h1>
                        <ul>
                            <li><a href="/manage">Contraseña</a></li>
                        </ul>
                    </article>
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect()(SettingsPage);