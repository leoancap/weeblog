import { commerce, lorem } from "faker";
import { IPost } from "../types/appTypes";

const createSamplePost = (i: number): IPost => ({
  id: i + "",
  title: commerce.productName(),
  description: lorem.paragraphs(),
  categories: [commerce.productAdjective(), commerce.productAdjective()],
  createAt: new Date().valueOf(),
});

const makeEmptyArray = (length: number) => new Array(length).fill(null);

export const samplePosts = makeEmptyArray(10).map((_, i) =>
  createSamplePost(i),
);
