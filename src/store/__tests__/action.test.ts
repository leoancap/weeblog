import { fetchPosts } from "../posts/action";
import IPostsAction from "../posts/actionCreator";

describe("async fetching posts", () => {
  it("makes sure the dispatch function is called", async () => {
    const dispatch = jest.fn();
    await fetchPosts()(dispatch);
    expect(dispatch).toBeCalledWith({ type: IPostsAction.FETCH_POSTS_BEGIN });
  });
});
