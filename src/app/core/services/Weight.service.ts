import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weight } from '../models/Weight';
import { WeightUnit } from '../models/WeightUnit';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<Weight[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Weight/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetUnit(): Observable<WeightUnit[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'WeightUnit/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }
}
