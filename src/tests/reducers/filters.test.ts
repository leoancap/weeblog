import { filtersReducer } from "../../store/filters/reducer";
import FiltersActionCreator from "../../store/filters/actionCreator";

it("returns the initial state if no action given", () => {
  // @ts-ignore
  const state = filtersReducer(undefined, {});
  expect(state).toEqual({
    textSearch: "",
    categories: [],
  });
});

it("should set textSearch filter", () => {
  const payload = "ergonomic";
  const action = {
    type: FiltersActionCreator.SET_TEXT_SEARCH,
    payload,
  };
  const state = filtersReducer(undefined, action);
  expect(state.textSearch).toBe(payload);
});

it("should append category filter", () => {
  const payload = "ergonomic";
  const action = {
    type: FiltersActionCreator.APPEND_CATEGORY,
    payload,
  };
  const state = filtersReducer(undefined, action);
  expect(state.categories).toEqual([payload]);
});

it("should remove category filter", () => {
  const payload = "ergonomic";
  const initialState = {
    textSearch: "",
    categories: ["sampleFilter", payload],
  };
  const action = {
    type: FiltersActionCreator.REMOVE_CATEGORY,
    payload,
  };
  const state = filtersReducer(initialState, action);
  expect(state.categories).toEqual(["sampleFilter"]);
});
