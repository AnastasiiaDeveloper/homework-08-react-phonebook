import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import toolkitReducer from "./toolkitReducer";
const rootReducers = combineReducers({
  toolkit: toolkitReducer,
});
export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat([createLogger()]),
});
