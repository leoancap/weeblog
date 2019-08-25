import { Reducer } from 'redux';

import FiltersActionTypes from './actionTypes';
import IFilterActions from './types';

interface IFiltersState {
  readonly textSearch: string;
  readonly selectedCategories: string[];
}
const filtersInitialState: IFiltersState = {
  textSearch: '',
  selectedCategories: [],
};

type IFiltersReducer = Reducer<IFiltersState, IFilterActions>
const filtersReducer: IFiltersReducer = (
  state = filtersInitialState,
  { type, payload },
) => {
  switch (type) {
    case FiltersActionTypes.SET_TEXT_SEARCH:
      return {
        ...state,
        textSearch: payload,
      };
    case FiltersActionTypes.TOGGLE_CATEGORY:
      return {
        ...state,
        selectedCategories: state.selectedCategories.includes(payload)
          ? state.selectedCategories.filter((category) => category !== payload)
          : [...state.selectedCategories, payload],
      };
    case FiltersActionTypes.RESET_CATEGORIES:
      return {
        ...state,
        selectedCategories: [],
      };
    default:
      return state;
  }
};

export default filtersReducer;
