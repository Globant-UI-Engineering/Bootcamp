import { createStore, applyMiddleware } from 'redux';

import sagas from './sagas'
import{composeWithDevTools} from 'redux-devtools-extension'
import userSaga from './sagas/userSaga'
import reducers from './reducers';
import playerSaga from './sagas/playerSaga';
import deviceSaga from './sagas/deviceSaga';
import playlistSaga from './sagas/playlistSaga';
import lyricsSaga from './sagas/lyricsSaga';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagas))
);

sagas.run(userSaga);
sagas.run(playerSaga);
sagas.run(deviceSaga);
sagas.run(playlistSaga);
sagas.run(lyricsSaga);

export default store;