import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConductorMaterial } from '../models/ConductorMaterial';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ConductorMaterialService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<ConductorMaterial[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorMaterial/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
