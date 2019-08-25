import { IPost } from '#domainTypes';

/** Returns an array containing all the possible
 * categories with no duplicates given an array of posts.
 *
 * @param {posts} [posts]
 */
export const getCategoriesFromPosts = (posts: IPost[]) => {
  const categories = posts.map((post) => post.categories);
  const flattenedCategories = categories.flatMap((post) => post);
  const noDuplicates = flattenedCategories.filter(
    (category: string, index: number, self) => self.indexOf(category) === index,
  );
  return noDuplicates;
};

/** Filters out unexisting categories based on the possible categories
 *
 * @param {posts} [posts]
 */
export const removeUnexistingCategories = (
  selectedCategories: string[],
  possibleCategories: string[],
) => selectedCategories.filter((category) => possibleCategories.includes(category));
