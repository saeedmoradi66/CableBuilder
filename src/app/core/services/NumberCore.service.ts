import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NumberCoreEarth } from '../models/NumberCoreEarth';
import { NumberCoreNull } from '../models/NumberCoreNull';
import { NumberCorePhase } from '../models/NumberCorePhase';
import { VoltageModel } from '../models/VoltageModel';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class NumberCoreService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  GetPhase(): Observable<NumberCorePhase[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'NumberCore/GetPhase')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetNull(): Observable<NumberCoreNull[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'NumberCore/GetNull')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetEarth(): Observable<NumberCoreEarth[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'NumberCore/GetEarth')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }
}
