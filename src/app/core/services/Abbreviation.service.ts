import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Abbreviation } from '../models/Abbreviation';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class AbbreviationService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<Abbreviation[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Abbreviation/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
