import React from 'react';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setToken } from '../actions/tokenActions'
import PropTypes from 'prop-types';

class LoginTransition extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false
        };
    }
    componentDidMount() {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
        let refreshToken = parsed.refresh_token;
        if(accessToken) {
            this.props.setToken(accessToken, refreshToken);
        } else {
            this.setState({
                error: true
            })
        }

        this.props.history.push('/user/');
    }

    render() {
        return (
            this.state.error ? <div>Error :(</div> : <div>OK</div>
        );
    }
}

LoginTransition.propTypes = {
    authToken: PropTypes.string,
    refreshToken: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        authToken: state.tokenReducer.authToken,
        refreshToken: state.tokenReducer.refreshToken
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setToken
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginTransition);