// Global
import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
// Local
import rootReducer from "./rootReducer";
import { IAppActions, IAppState } from "./types";

export default createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<IAppState, IAppActions>),
);
