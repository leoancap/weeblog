import { IPost } from "../types/appTypes";

/**
 * Returns an array containing all the possible
 * categories with no duplicates given an array of posts.
 */
export const getCategoriesFromPosts = (posts: IPost[]) => {
  const categories = posts.map(post => post.categories);
  const flattenedCategories = categories.flatMap(post => post);
  const noDuplicates = flattenedCategories.filter(
    (category: string, index: number, self) => self.indexOf(category) === index,
  );
  return noDuplicates;
};
