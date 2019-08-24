import { IPost } from '../types/appTypes';

/**
 *  Returns an array of posts based on
 *  the array of selected categories given
 *
 * @param {posts} [posts]
 * @param {selectedCategories} [categories]
 */
export const filterPosts = (
  posts:IPost[],
  selectedCategories:string[],
) => (selectedCategories.length === 0
  ? posts
  : posts.filter((post) => post.categories.some(
    (category) => selectedCategories.includes(category),
  )));
