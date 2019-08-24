import { fetchPosts } from "../../store/posts/action";
import PostsActionsCreators from "../../store/posts/actionCreator";

it("makes sure the dispatch function is called", async () => {
  const dispatch = jest.fn();
  await fetchPosts()(dispatch);
  expect(dispatch).toBeCalledWith({
    type: PostsActionsCreators.FETCH_POSTS_BEGIN,
  });
});
