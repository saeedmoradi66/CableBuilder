import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LayLength } from '../models/LayLength';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class LayLengthService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<LayLength[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'LayLength/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
