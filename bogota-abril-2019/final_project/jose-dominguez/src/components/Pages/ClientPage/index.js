import React from 'react';
import { connect } from 'react-redux';
import LoggedRedirectorContainer from '../../../containers/LoggedRedirectorContainer';
import { getClientUrl } from '../../../controllers/BobbaProxy';
import { logOut, userSetData } from '../../../actions';
import { tryGetUserData } from '../../../controllers/BobbaProxy';

class ClientPage extends React.Component {
    componentDidMount() {
        const { userContext, loginContext, dispatch } = this.props;
        if (!userContext.fetched) {
            tryGetUserData(loginContext.token).then(response => {
                if (response.error != null) {
                    dispatch(logOut());
                } else {
                    dispatch(userSetData(response.username, response.motto, response.look));
                }
            });
        }
    }

    render() {
        const { username, look, fetched } = this.props.userContext;

        if (!fetched) {
            return (
                <div className="client" />
            );
        }

        const src = getClientUrl(username, look);
        return (
            <div className="client">
                <LoggedRedirectorContainer />
                <iframe title='Bobba' src={src} />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    userContext: state.user,
    loginContext: state.login,
});

export default connect(mapStateToProps)(ClientPage);