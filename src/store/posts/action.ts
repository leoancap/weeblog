// Global
import { Dispatch } from "redux";
// Local
import { apiUrl } from "../../appContansts";
import { IPost } from "../../types/appTypes";
import PostActionTypes from "./actionCreator";
import IPostsActions from "./types";

export const fetchPostsBegin = (): IPostsActions => ({
  type: PostActionTypes.FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = (payload: IPost[]): IPostsActions => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostsFailure = (): IPostsActions => ({
  type: PostActionTypes.FETCH_POSTS_FAILURE,
});

export const fetchPosts = () => async (dispatch: Dispatch<IPostsActions>) => {
  dispatch(fetchPostsBegin());
  try {
    const rawResponse = await fetch(apiUrl + "/posts");
    const response = await rawResponse.json();
    dispatch(fetchPostsSuccess(response));
  } catch (_) {
    // Ignore error Object
    dispatch(fetchPostsFailure());
  }
};
