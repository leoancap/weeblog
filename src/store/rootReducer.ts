// Global
import { combineReducers } from "redux";
// Local
import filtersReducer from "./filters/reducer";
import postsReducer from "./posts/reducer";

const rootReducer = combineReducers({
  postsReducer,
  filtersReducer,
});

export default rootReducer;
