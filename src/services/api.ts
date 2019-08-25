import { apiUrl } from '../appContansts';

export default {
  fetchPosts: async () => {
    const rawResponse = await fetch(`${apiUrl}/posts`);
    const posts = await rawResponse.json();
    return posts;
  },
  fetchPost: async (postID:string) => {
    const rawResponse = await fetch(`${apiUrl}/posts/${postID}`);
    const post = await rawResponse.json();
    return post;
  },
};
