import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, purgeStoredState } from 'redux-persist'

import rootReducer from './reducers'
import rootSaga from './sagas'

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
  }

  const persistReducers = persistReducer(persistConfig, rootReducer)

  const store = createStore(
    persistReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )
  const persistStor = persistStore(store)
  sagaMiddleware.run(rootSaga)

  return {
    store,
    persistStor
  }
}

export default configureStore
