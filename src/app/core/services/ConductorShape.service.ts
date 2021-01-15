import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConductorShape } from '../models/ConductorShape';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ConductorShapeService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<ConductorShape[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorShape/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
