import { IPost } from '../../types/appTypes';
import PostsActionTypes from './actionTypes';

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

// Action Union for Post Actions
type IPostsActions = IFetchPostsBegin | IFetchPostsSuccess | IFetchPostsFailure | IRemovePost;
export default IPostsActions;
