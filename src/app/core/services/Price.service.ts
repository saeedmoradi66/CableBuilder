import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Price } from '../models/Price';
import { PriceUnit } from '../models/PriceUnit';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<Price[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Price/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetUnit(): Observable<PriceUnit[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'PriceUnit/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }
}
