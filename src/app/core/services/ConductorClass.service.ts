import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConductorActualDiameter } from '../models/ConductorActualDiameter';
import { ConductorClass } from '../models/ConductorClass';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ConductorClassService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<ConductorClass[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorClass/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

}
