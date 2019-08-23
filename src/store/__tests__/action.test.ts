import { fetchPosts } from "../post/action";

describe("async fetching posts", () => {
  it("makes sure the dispatch function is called", async () => {
    const dispatch = jest.fn();
    await fetchPosts()(dispatch);
    expect(dispatch).toBeCalledWith({ type: "FETCH_POSTS_BEGIN" });
  });
});
