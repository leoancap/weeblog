import PostsActionTypes from "./actionTypes";

import { IPost } from "#domainTypes";

interface IFetchPostsBegin {
  type: PostsActionTypes.FETCH_POSTS_BEGIN;
  payload: undefined;
}
interface IFetchPostsSuccess {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: IPost[];
}

interface IFetchPostsFailure {
  type: PostsActionTypes.FETCH_POSTS_FAILURE;
  payload: undefined;
}

interface IRemovePost {
  type: PostsActionTypes.REMOVE_POST;
  payload: string;
}

interface IAddPost {
  type: PostsActionTypes.ADD_POST;
  payload: IPost;
}

// Action Union for Post Actions
type IPostsActions =
  | IFetchPostsBegin
  | IFetchPostsSuccess
  | IFetchPostsFailure
  | IRemovePost
  | IAddPost;

export default IPostsActions;
