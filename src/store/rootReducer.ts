import { combineReducers } from 'redux';

import filtersReducer from './filters/reducer';
import postsReducer from './posts/reducer';

const rootReducer = combineReducers({
  postsReducer,
  filtersReducer,
});

export default rootReducer;
