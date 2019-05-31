import React from 'react';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setToken } from '../../actions/tokenActions'
import { setNowPlaying } from '../../actions/playerActions';
import { setUserInfo } from '../../actions/userActions';
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
            this.props.setUserInfo(accessToken);
        } else {
            this.setState({
                error: true
            })
        }

        this.props.history.push('/user/');
    }

    render() {
        return (
            this.state.error ? <div>Error with authorization</div> : <div>OK</div>
        );
    }
}

LoginTransition.propTypes = {
    authToken: PropTypes.string,
    refreshToken: PropTypes.string,
}

const mapStateToProps = (state) => {
    return {
        authToken: state.tokenReducer.authToken,
        refreshToken: state.tokenReducer.refreshToken
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setToken,
        setNowPlaying,
        setUserInfo
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginTransition);