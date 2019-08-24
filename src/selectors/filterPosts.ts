import { IPost } from '../types/appTypes';

/** Returns an array of posts based on
 *  the array of selected categories given
 *
 * @param {posts} [posts]
 * @param {selectedCategories} [categories]
 */
export const filterPostsByCategory = (
  posts:IPost[],
  selectedCategories:string[],
):IPost[] => (selectedCategories.length === 0
  ? posts
  : posts.filter((post) => post.categories.some(
    (category) => selectedCategories.includes(category),
  )));

/** Returns an array of posts based on the textValue  given
 *
 * @param {posts} [posts]
 * @param {textSearch} [textSearch]
 */
export const filterPostsByText = (
  posts:IPost[],
  textSearch:string,
):IPost[] => (textSearch.length === 0
  ? posts
  : posts.filter((post) => post.content && post.content.includes(textSearch)));
