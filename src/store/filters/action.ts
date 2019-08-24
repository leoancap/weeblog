import { Dispatch } from "redux";
import { IFilterActions } from "./types";
import FiltersActionCreators from "./actionCreator";

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
