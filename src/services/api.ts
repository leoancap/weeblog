const apiUrl = 'https://my-json-server.typicode.com/leoancap/weeblog';

export const api = {
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
