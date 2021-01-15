import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HypotheticalDiameter } from '../models/HypotheticalDiameter';
import { HypotheticalDiameterUnit } from '../models/HypotheticalDiameterUnit';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class HypotheticalDiameterService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<HypotheticalDiameter[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'HypotheticalDiameter/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetUnit(): Observable<HypotheticalDiameterUnit[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'HypotheticalDiameterUnit/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }
}
