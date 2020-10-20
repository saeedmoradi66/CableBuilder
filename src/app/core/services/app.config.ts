import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<string>('app.config');

export interface IAppConfig {
  apiEndpoint: string;
  apiSettingsPath: string;
  loginPath: string;
  NewloginPath: string;
  logoutPath: string;
  refreshTokenPath: string;
  accessTokenObjectKey: string;
  refreshTokenObjectKey: string;
  adminRoleName: string;
  
  resultVoucherState: string;
  captchaPath: string;
}

export const AppConfig: IAppConfig = {
  apiEndpoint: 'http://localhost:53814/api',
  apiSettingsPath: 'ApiSettings',
  loginPath: 'account/login',
  NewloginPath: 'account/NewLogin',
  logoutPath: 'account/logout',
  refreshTokenPath: 'account/RefreshToken',
  refreshTokenObjectKey: 'refresh_token',
  accessTokenObjectKey: 'access_token',
  adminRoleName: 'Admin',
  resultVoucherState: 'resultVoucherState',
  captchaPath:'account/CreateDNTCaptchaParams'
};
