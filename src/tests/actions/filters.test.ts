import { setTextSearch, toggleCategory } from '../../store/filters/action';
import filtersActionTypes from '../../store/filters/actionTypes';

it('should set the textSearch field with text value', () => {
  const text = 'test tring';
  const action = setTextSearch(text);
  expect(action).toEqual({
    type: filtersActionTypes.SET_TEXT_SEARCH,
    payload: text,
  });
});

it('should return the action payload with a new category', () => {
  const newCategory = 'ergonomic';
  const action = toggleCategory(newCategory);
  expect(action).toEqual({
    type: filtersActionTypes.TOGGLE_CATEGORY,
    payload: newCategory,
  });
});
