import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DieSerries } from '../models/DieSerries';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class DieSerriesService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<DieSerries[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'DieSerries/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
