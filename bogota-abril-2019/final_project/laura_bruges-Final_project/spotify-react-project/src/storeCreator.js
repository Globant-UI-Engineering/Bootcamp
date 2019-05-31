import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';

const composeEnhancer = () => {
    if(window.devToolsExtension) {
        window.devToolsExtension()
    };

    return compose;
} 


const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;