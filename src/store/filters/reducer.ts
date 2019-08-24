// Global
import { Reducer } from "redux";
// Local
import FiltersActionCreator from "./actionCreator";
import IFilterActions from "./types";

interface IFiltersState {
  readonly textSearch: string;
  readonly categories: string[];
}
const filtersInitialState: IFiltersState = {
  textSearch: "",
  categories: [],
};

const filtersReducer: IFiltersReducer = (
  state = filtersInitialState,
  { type, payload },
) => {
  switch (type) {
    case FiltersActionCreator.SET_TEXT_SEARCH:
      return {
        ...state,
        textSearch: payload,
      };
    case FiltersActionCreator.APPEND_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
      };
    case FiltersActionCreator.REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => category !== payload),
      };
    default:
      return state;
  }
};

export type IFiltersReducer = Reducer<IFiltersState, IFilterActions>;
export default filtersReducer;
