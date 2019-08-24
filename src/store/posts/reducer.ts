import { Reducer } from "redux";

import { IPost } from "../../types/appTypes";
import PostsActionCreators from "./actionCreator";
import { IPostsActions } from "./types";
import { LoadingStatus } from "../../appContansts";

interface IPostsState {
  readonly posts: IPost[];
  readonly loadingStatus: LoadingStatus;
}
const postsInitialState: IPostsState = {
  posts: [],
  loadingStatus: LoadingStatus.DONE,
};

export type IPostsReducer = Reducer<IPostsState, IPostsActions>;

export const postsReducer: IPostsReducer = (
  state = postsInitialState,
  action,
) => {
  switch (action.type) {
    case PostsActionCreators.FETCH_POSTS_BEGIN:
      return {
        ...state,
        loadingStatus: LoadingStatus.LOADING,
      };
    case PostsActionCreators.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loadingStatus: LoadingStatus.DONE,
        posts: action.payload,
      };
    case PostsActionCreators.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loadingStatus: LoadingStatus.ERROR,
      };
    default:
      return state;
  }
};
