import { IPost } from "../../types/appTypes";
import PostsActionTypes from "./actionCreator";

interface IFetchPostsBegin {
  type: PostsActionTypes.FETCH_POSTS_BEGIN;
}
interface IFetchPostsSuccess {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: IPost[];
}

interface IFetchPostsFailure {
  type: PostsActionTypes.FETCH_POSTS_FAILURE;
}

// Action Union for Post Actions
type IPostsActions = IFetchPostsBegin | IFetchPostsSuccess | IFetchPostsFailure;

export default IPostsActions;
