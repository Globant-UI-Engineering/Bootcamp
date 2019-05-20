import React from 'react';
import { connect } from 'react-redux';
import LoginHeader from '../components/Generic/LoginHeader';
import GenericHeader from '../components/Generic/GenericHeader';

class HeaderContainer extends React.Component {
    render() {
        if (this.props.loginContext.loggedIn) {
            return (<GenericHeader/>);
        } else {
            return (<ConnectedLoginHeader/>);
        }
    }
}

const mapStateToProps = state => ({
    loginContext: state.login,
});

export default connect(mapStateToProps)(HeaderContainer);
const ConnectedLoginHeader = connect()(LoginHeader);