import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from './app.config';
import { Observable, throwError } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { BaseModel } from '../models/BaseModel';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(
    private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  LoadPage(): Observable<BaseModel> {
    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Upload/LoadPage')
      .pipe(
        map((response: any) => {
         
          return response;
        }),
        
      );
  }

  Save(fileToUpload: File): Observable<BaseModel> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'Upload/UploadFile', formData)
      .pipe(
        map((response: any) => {
          return response;
        }),
        
      );
  }
}
