import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Density } from '../models/Density';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class DensityService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<Density[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Density/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
