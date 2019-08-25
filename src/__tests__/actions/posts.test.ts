import { fetchPosts, removePost, addPost } from '../../store/posts/action';
import PostsActionTypes from '../../store/posts/actionTypes';
import { IPost } from '../../types/appTypes';

it('makes sure the dispatch function is called', async () => {
  const dispatch = jest.fn();
  await fetchPosts()(dispatch);
  expect(dispatch).toBeCalledWith({
    type: PostsActionTypes.FETCH_POSTS_BEGIN,
  });
});

it('removes post', () => {
  const id = '1';
  const action = removePost(id);
  expect(action).toEqual({
    type: PostsActionTypes.REMOVE_POST,
    payload: id,
  });
});

it('adds post', () => {
  const payload:IPost = {
    id: '1',
    title: 'titleExample',
    content: 'descriptionExample',
    categories: ['descriptionExample'],
    datePosted: 1234,
  };
  const action = addPost(payload);
  expect(action).toEqual({
    type: PostsActionTypes.ADD_POST,
    payload,
  });
});
