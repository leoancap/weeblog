import { fetchPosts, removePost } from '../../store/posts/action';
import PostsActionTypes from '../../store/posts/actionTypes';

it('makes sure the dispatch function is called', async () => {
  const dispatch = jest.fn();
  await fetchPosts()(dispatch);
  expect(dispatch).toBeCalledWith({
    type: PostsActionTypes.FETCH_POSTS_BEGIN,
  });
});

it('removes post', async () => {
  const id = '1';
  const action = removePost(id);
  expect(action).toEqual({
    type: PostsActionTypes.REMOVE_POST,
    payload: id,
  });
});
