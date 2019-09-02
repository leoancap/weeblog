const apiUrl = 'https://my-json-server.typicode.com/leoancap/weeblog';

import { firebase } from "#services";
import { IPost } from "#domainTypes";

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
  fetchPostsFromFirebase: () => {
    firebase
      .firestore()
      .collection("posts")
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(post => ({
          ...post.data(),
          id: post.id,
        }));
        console.log(posts);
      });
  },
savePost : (post?: IPost) => {
    firebase
      .firestore()
      .collection("posts")
      .add({
        title: "Small Steel Tuna",
        content: "debitis eius exercitationem",
        categories: ["Gorgeous", "Small"],
        datePosted: 1563892281645,
      });
  },

  deletePost : () => {
  const id = "EoLhsWKLHHLVnzRw36Dt";
    firebase
      .firestore()
      .collection("posts")
      .doc(id)
      .delete();
  };
};
