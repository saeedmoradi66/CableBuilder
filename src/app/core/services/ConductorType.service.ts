import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConductorType } from '../models/ConductorType';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ConductorTypeService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<ConductorType[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorType/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
