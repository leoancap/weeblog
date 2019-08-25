import { createMockedPosts } from '../../utils/testUtils';

import postsReducer from '../../store/posts/reducer';

import {
  fetchPostsBegin,
  fetchPostsFailure,
  fetchPostsSuccess,
  removePost,
  addPost,
} from '#actions';

import { LoadingStatus } from '#constants';

import { IPost } from '#domainTypes';


it('returns initial state if no action passed to it', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore pass no action so that it returns initial state
  expect(postsReducer(undefined, {})).toEqual({
    posts: [],
    loadingStatus: LoadingStatus.DONE,
  });
});

it('begins fetching posts', () => {
  const action = fetchPostsBegin();
  expect(postsReducer(undefined, action)).toEqual({
    posts: [],
    loadingStatus: LoadingStatus.LOADING,
  });
});

it('ends fetching posts with success', () => {
  const mockedPosts = createMockedPosts(10);
  const action = fetchPostsSuccess(mockedPosts);
  expect(postsReducer(undefined, action)).toEqual({
    posts: mockedPosts,
    loadingStatus: LoadingStatus.DONE,
  });
});

it('ends fetching posts with failure', () => {
  const action = fetchPostsFailure();
  expect(postsReducer(undefined, action)).toEqual({
    posts: [],
    loadingStatus: LoadingStatus.ERROR,
  });
});

it('removes a post given an id', () => {
  const mockedPost:IPost = {
    id: '1',
    title: 'titleExample',
    content: 'descriptionExample',
    categories: ['descriptionExample'],
    datePosted: 1234,
  };
  const actionAddPost = addPost(mockedPost);
  const id = '1';
  const actionRemovePost = removePost(id);
  expect(
    postsReducer(postsReducer(undefined, actionAddPost), actionRemovePost),
  ).toEqual({
    posts: [],
    loadingStatus: LoadingStatus.DONE,
  });
});

it('adds a post given a post object', () => {
  const mockedPost:IPost = {
    id: '1',
    title: 'titleExample',
    content: 'descriptionExample',
    categories: ['descriptionExample'],
    datePosted: 1234,
  };
  const actionAddPost = addPost(mockedPost);
  expect(
    postsReducer(undefined, actionAddPost),
  ).toEqual({
    posts: [mockedPost],
    loadingStatus: LoadingStatus.DONE,
  });
});
