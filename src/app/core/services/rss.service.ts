import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from './app.config';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RssModel } from '../models/RssModel';
@Injectable({
  providedIn: 'root',
})
export class RssService {
  constructor(
    private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  GetRssFeed(): Observable<RssModel[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .get<RssModel[]>(`${this.appConfig.apiEndpoint}/` + 'Rss', {
        headers,
      })

      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  
}
