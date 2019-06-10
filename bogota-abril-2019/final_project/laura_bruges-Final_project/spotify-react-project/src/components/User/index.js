import User from './component';
import { connect } from 'react-redux';


const mapStatetoProps = state=>({
    user: state.userReducer.user
})


export default connect(mapStatetoProps)(User);