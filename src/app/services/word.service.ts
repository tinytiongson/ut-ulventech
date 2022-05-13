import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, EMPTY, map, Observable, of } from 'rxjs';

import { UrlDataModel } from '../models/url-data.model';

@Injectable()
export class WordService {
  constructor(public http: HttpClient) {}

  getUrlData(url?: string): Observable<UrlDataModel> {
    return url ? this.getData(url, {}) : of({});
  }

  getData(url: string, params: any): any {
    return this.http.get(url, { params: params }).pipe(
      map((res: any) => {
        let ret: any = res;
        if (!res) ret = EMPTY;

        return ret;
      }),
      catchError((err) => {
        console.error('HTTP Error', err);
        return err;
      })
    );
  }
}
