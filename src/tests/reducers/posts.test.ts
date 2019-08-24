import { createMockedPosts } from "../../utils/testUtils";
import {
  fetchPostsBegin,
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../../store/posts/action";
import reducer from "../../store/rootReducer";
import { LoadingStatus } from "../../appContansts";

it("returns initial state if no action passed to it", () => {
  // @ts-ignore pass no action so that it returns initial state
  expect(reducer(undefined, {})).toEqual({
    postsReducer: {
      posts: [],
      loadingStatus: LoadingStatus.DONE,
    },
  });
});

it("begins fetching posts", () => {
  const action = fetchPostsBegin();
  expect(reducer(undefined, action)).toEqual({
    postsReducer: {
      posts: [],
      loadingStatus: LoadingStatus.LOADING,
    },
  });
});

it("ends fetching posts with success", () => {
  const mockedPosts = createMockedPosts(10);
  const action = fetchPostsSuccess(mockedPosts);
  expect(reducer(undefined, action)).toEqual({
    postsReducer: {
      posts: mockedPosts,
      loadingStatus: LoadingStatus.DONE,
    },
  });
});

it("ends fetching posts with failure", () => {
  const action = fetchPostsFailure();
  expect(reducer(undefined, action)).toEqual({
    postsReducer: {
      posts: [],
      loadingStatus: LoadingStatus.ERROR,
    },
  });
});
