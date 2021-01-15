import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Compaction } from '../models/Compaction';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class CompactionService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<Compaction[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Compaction/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
