import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StrandNo } from '../models/StrandNo';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class StrandNoService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<StrandNo[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'StrandNo/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
