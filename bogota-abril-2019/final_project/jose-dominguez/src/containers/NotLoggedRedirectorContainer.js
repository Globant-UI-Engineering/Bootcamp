import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React from 'react';

class EzRedirector extends React.Component {
    render() {
        const { loginContext } = this.props;
        if (loginContext.loggedIn) {
            return (<Redirect to="/me" />);
        }
        return (<></>);
    }
}

const mapStateToProps = state => ({
    loginContext: state.login,
});

export default connect(mapStateToProps)(EzRedirector);