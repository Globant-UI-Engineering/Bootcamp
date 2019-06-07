import {createStore} from 'redux'
import Reducer from './reducer'

const storage = createStore(Reducer);

export default storage;
