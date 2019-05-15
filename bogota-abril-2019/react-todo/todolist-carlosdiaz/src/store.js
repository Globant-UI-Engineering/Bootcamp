import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const storageState = localStorage.getItem('tareas')? JSON.parse(localStorage.getItem('tareas')):[];
const middleware = [thunk];

const store = createStore(rootReducer, storageState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
