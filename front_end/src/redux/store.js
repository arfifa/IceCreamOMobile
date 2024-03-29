import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import reducer from './reducer';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, reducer)

const logger = createLogger({})

export default () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(
      logger,
      promiseMiddleware
    ))
  const persistor = persistStore(store)
  return { store, persistor }
}
