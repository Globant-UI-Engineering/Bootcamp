import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logOut } from '../../actions';

class Navigator extends React.Component {

    onLogOut = event => {
        const { dispatch } = this.props;
        dispatch(logOut());
    }

    render() {
        let { username } = this.props.loginContext;

        let navOptions = (
            <>
                <li className="rightside logout"><Link to="/" onClick={this.onLogOut}>Salir</Link></li>
                <li className="rightside"><NavLink activeClassName="selected" to="/settings">Opciones</NavLink></li>
            </>
        );

        if (username === '') {
            username = 'Invitado';
            navOptions = (
                <li className="rightside"><Link to="/register">Regístrate</Link></li>
            );
        }

        return (
            <nav>
                <div className="full_container">
                    <ul>
                        <li><NavLink activeClassName="selected" to="/me">{username}</NavLink></li>
                        <li><NavLink activeClassName="selected" to="/articles">Noticias</NavLink></li>
                        {navOptions}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loginContext: state.login,
});

export default connect(mapStateToProps)(Navigator);