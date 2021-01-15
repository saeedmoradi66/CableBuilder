import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { NOETCaptchaComponent } from './noetcaptcha/noetcaptcha.component';
import { LoginComponent } from './login/login.component';
import { ExpireComponent } from './expire/expire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [AppComponent, DashboardLayoutComponent, ErrorPageComponent, NOETCaptchaComponent, LoginComponent,ExpireComponent ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
