// Global
import { applyMiddleware, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// Local
import rootReducer from './rootReducer';
import { IAppActions, IAppState } from './types';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<IAppState, IAppActions>)),
);
