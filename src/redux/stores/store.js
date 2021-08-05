import { createStore, applyMiddleware } from 'redux';

//IMPLEMENTANDO REDUX
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import rootReducer  from '../index';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

//Export
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

