import { connect } from 'react-redux';
import Navigator from '../components/Navigator/Navigator';

const mapStateToProps = state => ({
    loginContext: state.login,
});

export default connect(mapStateToProps)(Navigator);