import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OhmicResistance } from '../models/OhmicResistance';
import { OhmicResistanceUnit } from '../models/OhmicResistanceUnit';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class OhmicResistanceService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<OhmicResistance[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'OhmicResistance/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetUnit(): Observable<OhmicResistanceUnit[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'OhmicResistanceUnit/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }
}
