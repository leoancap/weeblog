/**
 * Returns a substring of a given text withoug cutting any words up to the length given.
 * "the dog bites. the cat meows." => "the dog bites."
 * @param text string
 * @param length number
 */
export const shortenText = (text: string, length: number) => {
  const textCut = text.substr(0, length);

  return textCut.substr(0, Math.min(textCut.length, textCut.lastIndexOf(" ")));
};
