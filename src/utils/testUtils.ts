import { commerce, lorem, date } from "faker";
import { IPost } from "../types/appTypes";

const createSamplePost = (i: number): IPost => ({
  id: i + "",
  title: commerce.productName(),
  description: lorem.paragraphs() + lorem.paragraphs(),
  categories: [commerce.productAdjective(), commerce.productAdjective()],
  datePosted: date.past().valueOf(),
});

const makeEmptyArray = (length: number) => new Array(length).fill(null);

/**
 * Creates a sample of posts (mocked with faker)
 *
 * @param {number} [length]
 */
export const samplePosts = (length: number) =>
  makeEmptyArray(length).map((_, i) => createSamplePost(i));
