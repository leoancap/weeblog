import {AnyAction} from "redux"

import FilterActionTypes from "./actionTypes";

interface ISetTextSearch extends AnyAction {
  type: FilterActionTypes.SET_TEXT_SEARCH;
  payload: string;
}
interface IToggleCategory extends AnyAction {
  type: FilterActionTypes.APPEND_CATEGORY;
  payload: string;
}

interface IResetCategories extends AnyAction {
  type: FilterActionTypes.RESET_CATEGORIES;
}

// Action Union for Filters Actions
type IFilterActions = ISetTextSearch | IToggleCategory | IResetCategories;
export default IFilterActions;
