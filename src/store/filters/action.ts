// Global
import FiltersActionTypes from './actionTypes';
// Local
import IFilterActions from './types';

export const setTextSearch = (payload: string): IFilterActions => ({
  type: FiltersActionTypes.SET_TEXT_SEARCH,
  payload,
});

export const toggleCategory = (payload: string): IFilterActions => ({
  type: FiltersActionTypes.TOGGLE_CATEGORY,
  payload,
});