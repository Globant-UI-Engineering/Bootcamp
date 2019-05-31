import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk'
import sagas from './sagas'
import{composeWithDevTools} from 'redux-devtools-extension'
import userSaga from './sagas/userSaga'
import reducers from './reducers';
import playerSaga from './sagas/playerSaga';



const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagas))
)
sagas.run(userSaga)
sagas.run(playerSaga);

export default store;