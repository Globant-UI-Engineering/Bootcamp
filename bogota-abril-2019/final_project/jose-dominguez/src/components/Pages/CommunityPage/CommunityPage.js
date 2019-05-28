import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../Generic/Footer';
import Navigator from '../../Navigator/Navigator';
import HeaderContainer from '../../../containers/HeaderContainer';
import './community.css';

class CommunityPage extends React.Component {

    render() {
        return (
            <div className="generic">
                <HeaderContainer />
                <Navigator />
                <div className="column_container">
                    <article className="left_column">
                        <h1 className="blue">Usuarios</h1>
                    </article>
                    <article className="right_column">
                        <h1 className="green">Objetos</h1>
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

export default connect()(CommunityPage);