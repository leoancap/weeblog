// Global
import { Dispatch } from 'redux';
// Local
import { apiUrl } from '../../appContansts';
import { IPost } from '../../types/appTypes';
import PostActionTypes from './actionTypes';
import IPostsActions from './types';

export const fetchPostsBegin = (payload?: undefined): IPostsActions => ({
  type: PostActionTypes.FETCH_POSTS_BEGIN,
  payload,
});

export const fetchPostsSuccess = (payload: IPost[]): IPostsActions => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostsFailure = (payload?: undefined): IPostsActions => ({
  type: PostActionTypes.FETCH_POSTS_FAILURE,
  payload,
});

export const fetchPosts = () => async (dispatch: Dispatch<IPostsActions>) => {
  dispatch(fetchPostsBegin());
  try {
    const rawResponse = await fetch(`${apiUrl}/posts`);
    const response = await rawResponse.json();
    dispatch(fetchPostsSuccess(response));
  } catch (_) {
    // Ignore error Object
    dispatch(fetchPostsFailure());
  }
};

export const removePost = (payload: string) => ({
  type: PostActionTypes.REMOVE_POST,
  payload,
});
