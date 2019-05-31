import LoginTransition from './component';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUserInfo } from '../../actions/userActions';
import { setToken } from '../../actions/tokenActions';

const mapStateToProps = (state) => {
    return {
        authToken: state.tokenReducer.authToken,
        refreshToken: state.tokenReducer.refreshToken
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setToken,
        setUserInfo
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginTransition);