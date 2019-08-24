import { IPost } from "../../types/appTypes";
import FilterActionCreator from "./actionCreator";

interface ISetTextSearch {
  type: FilterActionCreator.SET_TEXT_SEARCH;
  payload: string;
}
interface IAppendCategory {
  type: FilterActionCreator.APPEND_CATEGORY;
  payload: string;
}

interface IRemoveCategory {
  type: FilterActionCreator.REMOVE_CATEGORY;
  payload: string;
}

// Action Union for Filters Actions
export type IFilterActions = ISetTextSearch | IAppendCategory | IRemoveCategory;
