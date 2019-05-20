import { connect } from 'react-redux';
import Me from '../components/MePage/Me';

const mapStateToProps = state => ({
    loginContext: state.login,
});

export default connect(mapStateToProps)(Me);