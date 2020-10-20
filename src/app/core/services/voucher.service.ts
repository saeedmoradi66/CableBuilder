import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { APP_CONFIG, IAppConfig } from './app.config';
import { VoucherModel } from '../models/VoucherModel';
import { ResponseModel } from '../models/ResponseModel';



@Injectable({
  providedIn: 'root',
})
export class VoucherService {
  constructor(
    private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) { }

}
