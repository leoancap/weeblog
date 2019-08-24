import { commerce, lorem, date } from "faker";
import { IPost } from "../types/appTypes";

const createSamplePost = (i: number): IPost => ({
  id: i + "",
  title: commerce.productName(),
  description: lorem.paragraphs(),
  categories: [commerce.productAdjective(), commerce.productAdjective()],
  // createAt: new Date().valueOf(),
  datePosted: date.past().valueOf(),
});

const makeEmptyArray = (length: number) => new Array(length).fill(null);

/**
 * Creates a sample a posts (mocked with faker)
 *
 * @param {number} [length]
 */
export const samplePosts = (length: number) =>
  makeEmptyArray(length).map((_, i) => createSamplePost(i));
