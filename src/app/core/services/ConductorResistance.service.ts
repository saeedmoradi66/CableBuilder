import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConductorResistance } from '../models/ConductorResistance';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ConductorResistanceService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<ConductorResistance[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorResistance/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
