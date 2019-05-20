import React from 'react';

class Me extends React.Component {
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
                    <button>
                        Entrar al hotel
                </button>
                </div>
            </>
        );
    }
}

export default Me;