import FilterActionTypes from "./actionTypes";

interface ISetTextSearch {
  type: FilterActionTypes.SET_TEXT_SEARCH;
  payload: string;
}
interface IToggleCategory {
  type: FilterActionTypes.APPEND_CATEGORY;
  payload: string;
}

// Action Union for Filters Actions
type IFilterActions = ISetTextSearch | IToggleCategory;
export default IFilterActions;
