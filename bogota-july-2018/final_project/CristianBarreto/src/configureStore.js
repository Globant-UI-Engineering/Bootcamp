// Node modules
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Main reducer
import app from './reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, app);

export default function configureStore() {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store)
    return { store, persistor }
};
