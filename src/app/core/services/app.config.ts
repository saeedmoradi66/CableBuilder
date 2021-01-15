import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<string>('app.config');

export interface IAppConfig {
  apiEndpoint: string;
  apiSettingsPath: string;
  loginPath: string;
  logoutPath: string;
  refreshTokenPath: string;
  accessTokenObjectKey: string;
  refreshTokenObjectKey: string;
  adminRoleName: string;
  captchaPath: string;
}

export const AppConfig: IAppConfig = {
  apiEndpoint: 'http://localhost:63098/api',
  apiSettingsPath: 'ApiSettings',
  loginPath: 'account/login',
  logoutPath: 'account/logout',
  refreshTokenPath: 'account/RefreshToken',
  refreshTokenObjectKey: 'refresh_token',
  accessTokenObjectKey: 'access_token',
  adminRoleName: 'Admin',
  
  captchaPath:'account/CreateDNTCaptchaParams'
};
