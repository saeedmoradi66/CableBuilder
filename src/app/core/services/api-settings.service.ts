import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from './app.config';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiSettingsService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  IsExistPicture(): Observable<boolean> {
    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ApiSettings/IsExistPicture')
      .pipe(
        map((response: any) => {
          return response;
        }),
        //
      );
  }
}
