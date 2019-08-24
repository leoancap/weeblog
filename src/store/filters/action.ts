// Global
import FiltersActionCreators from "./actionCreator";
// Local
import IFilterActions from "./types";

export const setTextSearch = (payload: string): IFilterActions => ({
  type: FiltersActionCreators.SET_TEXT_SEARCH,
  payload,
});

export const appendCatogory = (payload: string): IFilterActions => ({
  type: FiltersActionCreators.APPEND_CATEGORY,
  payload,
});

export const removeCategory = (payload: string): IFilterActions => ({
  type: FiltersActionCreators.REMOVE_CATEGORY,
  payload,
});
