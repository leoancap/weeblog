import { createMockedPosts } from "../../utils/testUtils";
import {
  fetchPostsBegin,
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../../store/posts/action";
import postsReducer from "../../store/posts/reducer";
import { LoadingStatus } from "../../appContansts";

it("returns initial state if no action passed to it", () => {
  // @ts-ignore pass no action so that it returns initial state
  expect(postsReducer(undefined, {})).toEqual({
    posts: [],
    loadingStatus: LoadingStatus.DONE,
  });
});

it("begins fetching posts", () => {
  const action = fetchPostsBegin();
  expect(postsReducer(undefined, action)).toEqual({
    posts: [],
    loadingStatus: LoadingStatus.LOADING,
  });
});

it("ends fetching posts with success", () => {
  const mockedPosts = createMockedPosts(10);
  const action = fetchPostsSuccess(mockedPosts);
  expect(postsReducer(undefined, action)).toEqual({
    posts: mockedPosts,
    loadingStatus: LoadingStatus.DONE,
  });
});

it("ends fetching posts with failure", () => {
  const action = fetchPostsFailure();
  expect(postsReducer(undefined, action)).toEqual({
    posts: [],
    loadingStatus: LoadingStatus.ERROR,
  });
});
