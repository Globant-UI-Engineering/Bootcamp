import React from 'react';
import { connect } from 'react-redux';
import { tryGetOnlineCountFake } from '../../controllers/BobbaProxy';
import { setOnlineCount } from '../../actions';

import Logo from './Logo';

class GenericHeader extends React.Component {
    componentDidMount() {
        const { fetched } = this.props.miscContext;
        const { dispatch } = this.props;
        if (!fetched) {
            tryGetOnlineCountFake().then(data => {
                dispatch(setOnlineCount(data.count));
            });
        }
    }

    render() {
        const { fetched, onlineCount } = this.props.miscContext;
        let onlineText = 'cargando...';
        if (fetched) {
            onlineText = onlineCount + ' usuarios conectados';
        }
        return (
            <header>
                <div className="header_container">
                    <Logo />
                    <p>
                        {onlineText}
                    </p>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    miscContext: state.misc,
});

export default connect(mapStateToProps)(GenericHeader);