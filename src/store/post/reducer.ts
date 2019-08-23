import { Reducer } from "redux";

import { IPost } from "../../types/appTypes";
import PostsActionCreators from "./actionCreator";
import { IPostsActions } from "./types";

interface IPostsState {
  readonly posts: IPost[];
  readonly loading: boolean;
  readonly error: boolean;
}
const postsInitialState: IPostsState = {
  posts: [],
  loading: false,
  error: false,
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
        loading: true,
      };
    case PostsActionCreators.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case PostsActionCreators.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
