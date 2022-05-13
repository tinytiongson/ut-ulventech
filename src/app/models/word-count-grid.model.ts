import { WordCountModel } from './word-count.model';

export interface WordCountGridModel {
  isloading: boolean,
  wordcounts: WordCountModel[]
}
