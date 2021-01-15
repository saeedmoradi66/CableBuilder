import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NumberWire } from '../models/NumberWire';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class NumberWireService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<NumberWire[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'NumberWire/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
