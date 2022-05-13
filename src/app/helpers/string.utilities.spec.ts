import { StringUtilities } from './string.utilities';

describe('Helpers: String Utilities', () => {
  it('should be {word:3}, {for:2} with string spaces and newlines', () => {
    expect(StringUtilities.countWords(['word for word for word'], 10)).toEqual([
      { word: 'word', occurences: 3 },
      { word: 'for', occurences: 2 },
    ]);

    expect(StringUtilities.countWords([`word for\n
             word for word`], 10)).toEqual([
      { word: 'word', occurences: 3 },
      { word: 'for', occurences: 2 },
    ]);
  });

  it('should get words with apostrophe', () => {
    expect(StringUtilities.countWords([`Quest's achievement`], 10)).toEqual([
      { word: "achievement", occurences: 1 },
      { word: "quest's", occurences: 1 },
    ]);
  });

  it('should get words with dashes', () => {
    expect(StringUtilities.countWords([`mark-up achieve`], 10)).toEqual([
      { word: "achieve", occurences: 1 },
      { word: "mark-up", occurences: 1 },
    ]);
  });

  it('should not get periods, ellipsis', () => {
    expect(StringUtilities.countWords([`mark-up achieve...`], 10)).toEqual([
      { word: "achieve", occurences: 1 },
      { word: "mark-up", occurences: 1 },
    ]);
  });

  it('should not get question marks', () => {
    expect(StringUtilities.countWords([`mark-up achieve??`], 10)).toEqual([
      { word: "achieve", occurences: 1 },
      { word: "mark-up", occurences: 1 },
    ]);
  });
});
