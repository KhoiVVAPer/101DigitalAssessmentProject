import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSaga";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { ENV } from "@env";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type RootState = ReturnType<typeof store.getState>;
console.log({ ENV });

let middlewares: any[] = [];

const dev = ENV === "dev";

if (dev) {
  middlewares.push(logger);
}

const sagaMiddleware = createSagaMiddleware();
middlewares = [...middlewares, sagaMiddleware];

const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: dev,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

sagaMiddleware.run(rootSaga);

export { persistor, store };
