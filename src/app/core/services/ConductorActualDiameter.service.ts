import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConductorActualDiameter } from '../models/ConductorActualDiameter';
import { ConductorActualDiameterUnit } from '../models/ConductorActualDiameterUnit';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ConductorActualDiameterService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<ConductorActualDiameter[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorActualDiameter/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetMin(): Observable<ConductorActualDiameter[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorActualDiameter/GetMin')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetMax(): Observable<ConductorActualDiameter[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorActualDiameter/GetMax')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetUnit(): Observable<ConductorActualDiameterUnit[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorActualDiameterUnit/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

}
