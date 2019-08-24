// Global
import { Reducer } from "redux";
// Local
import filtersActionTypes from "./actionTypes";
import IFilterActions from "./types";

interface IFiltersState {
  readonly textSearch: string;
  readonly selectedCategories: string[];
}
const filtersInitialState: IFiltersState = {
  textSearch: "",
  selectedCategories: [],
};

const filtersReducer: IFiltersReducer = (
  state = filtersInitialState,
  { type, payload },
) => {
  switch (type) {
    case filtersActionTypes.SET_TEXT_SEARCH:
      return {
        ...state,
        textSearch: payload,
      };
    case filtersActionTypes.TOGGLE_CATEGORY:
      return {
        ...state,
        selectedCategories: state.selectedCategories.includes(payload)
          ? state.selectedCategories.filter(category => category !== payload)
          : [...state.selectedCategories, payload],
      };
    default:
      return state;
  }
};

export type IFiltersReducer = Reducer<IFiltersState, IFilterActions>;
export default filtersReducer;
