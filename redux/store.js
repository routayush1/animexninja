import { applyMiddleware, createStore } from "redux";
import { oneReducer } from "./reducers/allreducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, oneReducer);
export let Store = createStore(persistedReducer, applyMiddleware(thunk));
export let Persistor = persistStore(Store);
