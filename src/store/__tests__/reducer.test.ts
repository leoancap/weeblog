import { samplePosts } from "../../utils/testUtils";
import {
  fetchPostsBegin,
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../post/action";
import reducer from "../rootReducer";

describe("Reducer tests accordingly to each actions given", () => {
  it("returns initial state if no action passed to it", () => {
    // @ts-ignore pass no action so that it returns initial state
    expect(reducer(undefined, {})).toEqual({
      postsReducer: {
        posts: [],
        loading: false,
        error: false,
      },
    });
  });

  it("begins fetching posts", () => {
    const action = fetchPostsBegin();
    expect(reducer(undefined, action)).toEqual({
      postsReducer: {
        posts: [],
        loading: true,
        error: false,
      },
    });
  });

  it("ends fetching posts with success", () => {
    const action = fetchPostsSuccess(samplePosts);
    expect(reducer(undefined, action)).toEqual({
      postsReducer: {
        posts: samplePosts,
        loading: false,
        error: false,
      },
    });
  });

  it("ends fetching posts with failure", () => {
    const action = fetchPostsFailure();
    expect(reducer(undefined, action)).toEqual({
      postsReducer: {
        posts: [],
        loading: false,
        error: true,
      },
    });
  });
});
