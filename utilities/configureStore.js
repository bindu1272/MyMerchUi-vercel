"use client";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import reducers from "../reducers";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import configureAxios from "./configureAxios";
import rootSaga from '../sagas'
import "regenerator-runtime/runtime";
/**
 * logs store update when dispatching
 *
 * @param  {[type]} store [description]
 * @return {[type]}       [description]
 */

const logger = createLogger();


// export const api = configureAxios(process.env.GATSBY_API_URL);


const sagaMiddleware = createSagaMiddleware();

/**
 * redux-persist config
 */
const persistConfig = {
  key: 'root',
  whitelist: ['auth', 'brands', 'entities'],
  storage
};

/**
 * returns list of middlewares
 *
 * @return Array[]
 */
const configureMiddlewares = () => {
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }

  return middlewares;
};

/**
 * configure redux persist
 */
const configurePersistStore = () => {
  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};

/**
 * create a store and persistor
 * with configured middlewares
 */
const configureStore = () => {
  const middlewares = configureMiddlewares();

  const reducers = configurePersistStore();

  const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  return { store, persistor };
};

// export default configureStore;
const {store,persistor} = configureStore();
export {store,persistor};
