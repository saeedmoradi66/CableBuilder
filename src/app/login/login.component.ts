import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AuthService,
  SettingsService,

  ResultVoucherState,
  NezamState,
  IAppConfig,
  APP_CONFIG,
  Credentials,
} from 'src/app/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NOETCaptchaComponent } from 'src/app/noetcaptcha/noetcaptcha.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  error = '';
  returnUrl: string | null = null;
  ipAddress: string = '';
  errorMessages: string = '';
  captchaApiUrl: string = `${this.appConfig.apiEndpoint}/${this.appConfig.captchaPath}`;
  @ViewChild("appDntCaptcha") appDntCaptcha: NOETCaptchaComponent;


  isLoading: boolean = false;
  model: Credentials = { username: "", password: "", rememberMe: false, DNTCaptchaInputText: '', DNTCaptchaText: '', DNTCaptchaToken: '' };


  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute, private fb: FormBuilder, @Inject(APP_CONFIG) private appConfig: IAppConfig) {


  }
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', Validators.required],
    rememberMe: ['']

  });
  ngOnInit() {

    // reset the login status
    this.authService.logout(false);

    // get the return url from route parameters
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"];
    // set the captchaEndpoint property to point to
    // the captcha endpoint path on your app's backend

  }

  submitForm() {
    this.isLoading = true;


    this.model.username = this.loginForm.value.username;
    this.model.password = this.loginForm.value.password;
    this.model.rememberMe = this.loginForm.value.rememberMe;
    this.error = "";
    this.authService.login(this.model)
      .subscribe(response => {

        if (response.result == 0) {
          this.error = "Enter Correct Security Code";
        }
        else if (response.result == 2) {
          this.error = "Invalid User name or Password. Please try again.";
        }
        else {
          if (this.returnUrl) {
            this.router.navigate([this.returnUrl]);
          } else {
            this.router.navigate(["/dashboard/home"]);
          }
        }
       
      }
    );
    this.isLoading = false;
    this.appDntCaptcha.doRefresh();
  }
}
