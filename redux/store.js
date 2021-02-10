import { applyMiddleware, createStore } from "redux";
import { oneReducer } from "./reducers/allreducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
const persistConfig = {
  key: "animex",
  storage,
};

const persistedReducer = persistReducer(persistConfig, oneReducer);
export let Store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export let Persistor = persistStore(Store);
