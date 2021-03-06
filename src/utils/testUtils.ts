// eslint-disable-next-line import/no-extraneous-dependencies
import { commerce, lorem, date } from 'faker';
import { IPost } from '../types/appTypes';

const createSamplePost = (i: number): IPost => ({
  id: `${i}`,
  title: commerce.productName(),
  content: lorem.text(),
  categories: [commerce.productAdjective(), commerce.productAdjective()],
  datePosted: date.past().valueOf(),
});

const makeEmptyArray = (length: number) => new Array(length).fill(null);

/** Creates a sample of posts (mocked with faker)
 *
 * @param {number} [length]
 */
export const createMockedPosts = (length: number) => makeEmptyArray(length).map(
  (_, i) => createSamplePost(i),
);

export const fakeContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, nesciunt ab obcaecati doloremque reiciendis neque aspernatur dicta! Fugiat vitae culpa tempora id quam soluta hic ducimus dicta facere quisquam?';
