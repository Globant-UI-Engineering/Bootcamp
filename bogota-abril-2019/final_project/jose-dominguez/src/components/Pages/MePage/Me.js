import React from 'react';
import { connect } from 'react-redux';
import { getClientUrl } from '../../../controllers/BobbaProxy';

class Me extends React.Component {
    popClient = (event) => {
        event.preventDefault();
        const { username, look } = this.props.loginContext;
        window.open(getClientUrl(username, look), 'Bobba', 'width=980,height=600,location=no,status=no,menubar=no,directories=no,toolbar=no,resizable=no,scrollbars=no'); return false;
    }
    render() {
        const { username, motto, look } = this.props.loginContext;
        const lookUrl = '//www.habbo.com/habbo-imaging/avatarimage?figure=' + look + '&size=l&direction=2&gesture=sml';

        return (
            <>
                <div className="overlay">
                    <img alt={username} src={lookUrl} />
                </div>
                <div className="user_info">
                    <h3>{username}</h3>
                    <p>{motto}</p>
                    <button onClick={this.popClient}>
                        Entrar al hotel
                    </button>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    loginContext: state.login,
});

export default connect(mapStateToProps)(Me);