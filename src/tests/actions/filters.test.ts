import {
  setTextSearch,
  appendCatogory,
  removeCategory,
} from "../../store/filters/action";
import FiltersActionCreator from "../../store/filters/actionCreator";

it("should set the textSearch field with text value", () => {
  const text = "test tring";
  const action = setTextSearch(text);
  expect(action).toEqual({
    type: FiltersActionCreator.SET_TEXT_SEARCH,
    payload: text,
  });
});

it("should append a category to categories filter", () => {
  const newCategory = "ergonomic";
  const action = appendCatogory(newCategory);
  expect(action).toEqual({
    type: FiltersActionCreator.APPEND_CATEGORY,
    payload: newCategory,
  });
});

it("should remove a category to categories filter", () => {
  const category = "ergonomic";
  const action = removeCategory(category);
  expect(action).toEqual({
    type: FiltersActionCreator.REMOVE_CATEGORY,
    payload: category,
  });
});
