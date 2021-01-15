import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StringDiameter } from '../models/StringDiameter';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class StringDiameterService {

 constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<StringDiameter[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'StringDiameter/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
