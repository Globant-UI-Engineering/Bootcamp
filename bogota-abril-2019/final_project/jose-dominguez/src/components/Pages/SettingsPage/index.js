import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Footer from '../../Generic/Footer';
import Navigator from '../../Navigator';
import LoggedRedirectorContainer from '../../../containers/LoggedRedirectorContainer';
import HeaderContainer from '../../../containers/HeaderContainer';
import ChangePassword from './ChangePassword';
import ChangeMotto from './ChangeMotto';

const RedirectorComponent = () => <Redirect to="/settings/password" />;

class SettingsPage extends React.Component {

    render() {
        return (
            <div className="generic form">
                <LoggedRedirectorContainer />
                <HeaderContainer />
                <Navigator />
                <div className="column_container">
                    <article className="left_column">
                        <Switch>
                            <Route path="/settings/motto" component={ChangeMotto} />
                            <Route path="/settings/password" component={ChangePassword} />
                            <Route component={RedirectorComponent} />
                        </Switch>
                    </article>
                    <article className="right_column">
                        <h1 className="blue">Contenido</h1>
                        <ul>
                            <li><NavLink activeClassName="bold" to="/settings/password">Cambiar contraseña</NavLink></li>
                            <li><NavLink activeClassName="bold" to="/settings/motto">Cambiar misión</NavLink></li>
                        </ul>
                    </article>
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect()(SettingsPage);