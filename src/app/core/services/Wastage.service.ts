import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Wastage } from '../models/Wastage';
import { WastageUnit } from '../models/WastageUnit';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class WastageService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<Wastage[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Wastage/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetUnit(): Observable<WastageUnit[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'WastageUnit/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }
}
