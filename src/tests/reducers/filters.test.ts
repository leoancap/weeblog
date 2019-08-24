import FiltersActionCreator from "../../store/filters/actionCreator";
import filtersReducer from "../../store/filters/reducer";
import {
  setTextSearch,
  appendCatogory,
  removeCategory,
} from "../../store/filters/action";

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
  const state = filtersReducer(undefined, setTextSearch(payload));
  expect(state.textSearch).toBe(payload);
});

it("should append category filter", () => {
  const payload = "ergonomic";
  const state = filtersReducer(undefined, appendCatogory(payload));
  expect(state.categories).toEqual([payload]);
});

it("should remove category filter", () => {
  const payload = "ergonomic";
  const initialState = {
    textSearch: "",
    categories: ["sampleFilter", payload],
  };
  const state = filtersReducer(initialState, removeCategory(payload));
  expect(state.categories).toEqual(["sampleFilter"]);
});
