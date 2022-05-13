import { Injectable } from '@angular/core';

import { WordCountModel } from './../models/word-count.model';

@Injectable()
export class StringUtilities {
  static countWords(words: string[], i: number): WordCountModel[] {
    if (words?.join(' ').trim().length == 0) return [];
    let wordCount: any = words
      .join(' ')
      .match(/([^\s\\{}\[\]\*]*\b\w*?\w*\b)/gmi)
      ?.filter((m) => m.length > 0)
      .reduce(StringUtilities.reduceWithCount, Object.create(null));

    let ret: WordCountModel[] = StringUtilities.arrayFromDict(wordCount)
      .sort(StringUtilities.customWordSort)
      .slice(0, i);

    return ret;
  }

  private static reduceWithCount(map: any, word: string): any {
    word = word.toLocaleLowerCase()
    map[word] = (map[word] || 0) + 1;
    return map;
  }

  private static arrayFromDict(wordCount: any): WordCountModel[] {
    return Array.from(Object.keys(wordCount), (k, i) => {
      return { word: k, occurences: wordCount[k] };
    });
  }

  private static customWordSort(a: WordCountModel, b: WordCountModel): number {
    if (b.occurences == a.occurences) {
      return a.word.replace(/[^a-zA-Z]/g, '') > b.word.replace(/[^a-zA-Z]/g, '') ? 1 : -1;
    } else return b.occurences - a.occurences;
  }
}
