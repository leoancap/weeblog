/**
 * Returns a substring of a given text up to last period of a given lenght.
 * "the dog bites. the cat meows." => "the dog bites."
 * @param text string
 * @param length number
 */
export const shortenText = (text: string, length: number) => {
  const textCut = text.substr(0, length);

  return textCut.substr(
    0,
    Math.min(textCut.length, textCut.lastIndexOf(". ") + 1),
  );
};
