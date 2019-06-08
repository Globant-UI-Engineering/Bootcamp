import React from 'react';
import { connect } from 'react-redux';
import { tryPatchUser } from '../../../controllers/BobbaProxy';
import { userSetData } from '../../../actions';
import { RIEInput } from 'riek2';

class Me extends React.Component {
    popClient = event => {
        event.preventDefault();
        window.open('/client', 'Bobba', 'width=980,height=600,location=no,status=no,menubar=no,directories=no,toolbar=no,resizable=no,scrollbars=no');
        return false;
    }

    handleChangeMotto = data => {
        const allegedMotto = data.motto;
        const { loginContext, dispatch } = this.props;

        tryPatchUser(loginContext.token, { motto: allegedMotto }).then(response => {
            if (response.error == null) {
                dispatch(userSetData(response.username, response.motto, response.look));
            }
        });
    }

    render() {
        const { username, look, motto } = this.props.userContext;
        let lookUrl = '/web-gallery/images/habbo_skeleton.gif';
        if (look !== '') {
            lookUrl = '//www.habbo.com/habbo-imaging/avatarimage?figure=' + look + '&size=l&direction=2&gesture=sml';
        }

        return (
            <>
                <div className="overlay">
                    <img alt={username} src={lookUrl} />
                </div>
                <div className="user_info">
                    <h3>{username}</h3>
                    <p>
                        <RIEInput
                            value={motto}
                            change={this.handleChangeMotto}
                            classLoading="loading"
                            propName='motto' />
                    </p>
                    <img src="/web-gallery/images/pencil.svg" alt="editar datos" className="edit_icon" />
                    <button onClick={this.popClient}>
                        Entrar al hotel
                    </button>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    userContext: state.user,
    loginContext: state.login,
});

export default connect(mapStateToProps)(Me);