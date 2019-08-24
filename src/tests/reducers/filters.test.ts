import filtersReducer from '../../store/filters/reducer';
import { setTextSearch, toggleCategory } from '../../store/filters/action';

it('returns the initial state if no action given', () => {
  // @ts-ignore
  const state = filtersReducer(undefined, {});
  expect(state).toEqual({
    textSearch: '',
    selectedCategories: [],
  });
});

it('should set textSearch filter', () => {
  const payload = 'ergonomic';
  const state = filtersReducer(undefined, setTextSearch(payload));
  expect(state.textSearch).toBe(payload);
});

it('should append category filter', () => {
  const payload = 'ergonomic';
  const state = filtersReducer(undefined, toggleCategory(payload));
  expect(state.selectedCategories).toEqual([payload]);
});

it('should remove category filter if already exist', () => {
  const payload = 'ergonomic';
  const initialState = {
    textSearch: '',
    selectedCategories: ['sampleFilter', payload],
  };
  const state = filtersReducer(initialState, toggleCategory(payload));
  expect(state.selectedCategories).toEqual(['sampleFilter']);
});
