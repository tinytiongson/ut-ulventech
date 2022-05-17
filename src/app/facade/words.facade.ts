import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, of, Subject, switchMap } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

import { StringUtilities } from './../helpers/string.utilities';
import { UrlDataModel } from './../models/url-data.model';
import { WordCountModel } from './../models/word-count.model';
import { WordsModel } from '../models/words.model';
import { WordService } from './../services/word.service';
import { WordCountGridModel } from './../models/word-count-grid.model';

@Injectable()
export class WordsFacade implements OnDestroy {
  protected wordsFacadeUnsubscribe$: Subject<void> = new Subject<void>();
  protected words$: BehaviorSubject<WordsModel> = new BehaviorSubject<WordsModel>({});

  public gridData$: Observable<WordCountGridModel>;

  constructor(public router: Router, private wordService: WordService) {
    this.gridData$ = this.getGridData();
  }

  ngOnDestroy() {
    this.wordsFacadeUnsubscribe$.next();
    this.wordsFacadeUnsubscribe$.complete();
  }

  public getGridData(): Observable<WordCountGridModel> {
    return this.words$.pipe(
      switchMap((words) => {
        return this.wordService.getUrlData(words.url).pipe(
          switchMap((urlData: UrlDataModel) => {
            let description = urlData?.description;
            let wordCount: WordCountModel[] = StringUtilities.countWords([words.story ?? '', description], 10);
            let wordCountGridModel: WordCountGridModel = { isloading: false, wordcounts: wordCount};
            return of(wordCountGridModel);
          }),
          takeUntil(this.wordsFacadeUnsubscribe$)
        );
      }),
      startWith({ isloading: true, wordcounts: [] }),
      takeUntil(this.wordsFacadeUnsubscribe$)
    );
  }

  public processData(data: WordsModel) {
    this.words$.next(data);
    this.router.navigate(['/report']);
  }
}
