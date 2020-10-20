import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

import { AuthTokenType } from './../models/auth-token-type';
import { AuthUser } from './../models/auth-user';
import { VoucherModel } from './../models/VoucherModel';
import { ApiConfigService } from './api-config.service';
import { APP_CONFIG, IAppConfig } from './app.config';
import { RefreshTokenService } from './refresh-token.service';
import { TokenStoreService } from './token-store.service';
import { ResultVoucherState } from '../Enums/ResultVoucherState';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStatusSource = new BehaviorSubject<boolean>(false);
  authStatus$ = this.authStatusSource.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(APP_CONFIG) private appConfig: IAppConfig,
    private apiConfigService: ApiConfigService,
    private tokenStoreService: TokenStoreService,
    private refreshTokenService: RefreshTokenService,
    private globalService:GlobalService
  ) {
    this.updateStatusOnPageRefresh();
    // this.refreshTokenService.scheduleRefreshToken(
    //   this.isAuthUserLoggedIn(),
    //   false
    // );
  }

  login(model: VoucherModel): Observable<VoucherModel> {
    this.globalService.FullName = '';
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post(
        `${this.appConfig.apiEndpoint}/${this.appConfig.NewloginPath}`,
        model,{ headers: headers, withCredentials: true /* For CORS */ }
      )
      .pipe(
        map((response: any) => {
          let model: VoucherModel = new VoucherModel();

          model.resultVoucherState = response.resultVoucherState;

          if (response.resultVoucherState != ResultVoucherState.Free) {
            this.authStatusSource.next(false);
            return model;
          }
          this.tokenStoreService.storeLoginSession(response);
         
        //  this.refreshTokenService.scheduleRefreshToken(true, true);
          this.authStatusSource.next(true);

          model.resultVoucherState = response.resultVoucherState;

          return model;
        }),
        
      );
  }

  Editlogin(credentials: VoucherModel): Observable<VoucherModel> {
    this.globalService.FullName = '';
    return this.http
      .post(
        `${this.appConfig.apiEndpoint}/${this.appConfig.loginPath}`,
        credentials
      )
      .pipe(
        map((response: any) => {
          let model: VoucherModel = new VoucherModel();

          model.resultVoucherState = response.resultVoucherState;
          model.editedNo = response.editedNo;
          if (response.resultVoucherState != ResultVoucherState.Registered) {
            this.authStatusSource.next(false);
            return model;
          }
          this.tokenStoreService.storeLoginSession(response);
         
        //  this.refreshTokenService.scheduleRefreshToken(true, true);
          this.authStatusSource.next(true);

          model.resultVoucherState = response.resultVoucherState;
          model.editedNo = response.editedNo;
          return model;
        }),
        
      );
  }

  getBearerAuthHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.tokenStoreService.getRawAuthToken(
        AuthTokenType.AccessToken
      )}`,
    });
  }

  logout(navigateToHome: boolean): void {
    this.globalService.FullName = '';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const refreshToken = encodeURIComponent(
      this.tokenStoreService.getRawAuthToken(AuthTokenType.RefreshToken)
    );
    this.http
      .get(
        `${this.appConfig.apiEndpoint}/${this.appConfig.logoutPath}?refreshToken=${refreshToken}`,
        { headers }
      )
      .pipe(
        map((response) => response || {}),
       // catchError(this.ShowError),
        finalize(() => {
          this.tokenStoreService.deleteAuthTokens();
         // this.refreshTokenService.unscheduleRefreshToken(true);
          this.authStatusSource.next(false);
          if (navigateToHome) {
            this.router.navigate(['/']);
          }
        })
      )
      .subscribe((result) => {
        console.log('logout', result);
      });
  }

  isAuthUserLoggedIn(): boolean {
    return (
      this.tokenStoreService.hasStoredAccessAndRefreshTokens() &&
      !this.tokenStoreService.isAccessTokenTokenExpired()
    );
  }

  getAuthUser(): AuthUser | null {
    if (!this.isAuthUserLoggedIn()) {
      return null;
    }

    const decodedToken = this.tokenStoreService.getDecodedAccessToken();
    const roles = this.tokenStoreService.getDecodedTokenRoles();
    return Object.freeze({
      userId:
        decodedToken[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ],
      userName: '',
      displayName:'',
      roles,
    });
  }

  isAuthUserInRoles(requiredRoles: string[]): boolean {
    const user = this.getAuthUser();
    if (!user || !user.roles) {
      return false;
    }

    if (user.roles.indexOf(this.appConfig.adminRoleName.toLowerCase()) >= 0) {
      return true; // The `Admin` role has full access to every pages.
    }

    return requiredRoles.some((requiredRole) => {
      if (user.roles) {
        return user.roles.indexOf(requiredRole.toLowerCase()) >= 0;
      } else {
        return false;
      }
    });
  }

  public getIPAddress(): any {
    return this.http.get('http://api.ipify.org/?format=json');
  }

  isAuthUserInRole(requiredRole: string): boolean {
    return this.isAuthUserInRoles([requiredRole]);
  }

  private updateStatusOnPageRefresh(): void {
    this.authStatusSource.next(this.isAuthUserLoggedIn());
  }

 

  private ShowError(errorResponse: HttpErrorResponse) {
    console.error(errorResponse.message);
    console.error(errorResponse.name);
    console.error(errorResponse.url);
    console.error(errorResponse.statusText);
    if (errorResponse.error instanceof ErrorEvent) {
      return throwError(errorResponse.message );
    } else {
      return throwError('server error.');
    }
  }
}
