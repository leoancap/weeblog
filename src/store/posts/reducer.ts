// Global
import { Reducer } from 'redux';
// Local
import { LoadingStatus } from '../../appContansts';
import { IPost } from '../../types/appTypes';
import PostsActionTypes from './actionTypes';
import IPostsActions from './types';

interface IPostsState {
  readonly posts: IPost[];
  readonly loadingStatus: LoadingStatus;
}
const postsInitialState: IPostsState = {
  posts: [],
  loadingStatus: LoadingStatus.DONE,
};

const postsReducer: IPostsReducer = (
  state = postsInitialState,
  { type, payload },
) => {
  switch (type) {
    case PostsActionTypes.FETCH_POSTS_BEGIN:
      return {
        ...state,
        loadingStatus: LoadingStatus.LOADING,
      };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loadingStatus: LoadingStatus.DONE,
        posts: [...(payload as IPost[]), ...state.posts],
      };
    case PostsActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loadingStatus: LoadingStatus.ERROR,
      };
    case PostsActionTypes.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload),
      };
    default:
      return state;
  }
};

export type IPostsReducer = Reducer<IPostsState, IPostsActions>;
export default postsReducer;
