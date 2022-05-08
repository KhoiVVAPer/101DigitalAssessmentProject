import {useDispatch} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/rootSaga';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import {ENV} from '@env';

export type RootState = ReturnType<typeof store.getState>;
console.log({ENV});

let middlewares: any[] = [];

const dev = ENV === 'dev';

if (dev) {
  middlewares.push(logger);
}

const sagaMiddleware = createSagaMiddleware();
middlewares = [...middlewares, sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  devTools: dev,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

sagaMiddleware.run(rootSaga);

export default store;
