import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AuthService,
  SettingsService,
  RssService,
  ResultVoucherState,
  NezamState,
  IAppConfig,
  APP_CONFIG,
} from 'src/app/core';
import { FormBuilder, Validators } from '@angular/forms';
import { VoucherModel } from 'src/app/core/models/VoucherModel';
import { SettingModel } from 'src/app/core/models/SettingModel';
import { NOETCaptchaComponent } from 'src/app/noetcaptcha/noetcaptcha.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model = new VoucherModel();
  
  error = '';
  returnUrl: string | null = null;
  ipAddress: string = '';
  errorMessages: string = '';
 captchaApiUrl:string =  `${this.appConfig.apiEndpoint}/${this.appConfig.captchaPath}`;
  @ViewChild("appDntCaptcha") appDntCaptcha: NOETCaptchaComponent;


  isLaading: boolean = false;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private settingService: SettingsService,
     @Inject(APP_CONFIG) private appConfig: IAppConfig
   
  ) {}
  loginForm = this.fb.group({
    voucherID: [
      '',
      [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(7),
        Validators.min(1000000),
        Validators.max(9999999),
      ],
    ],
    code: [
      '',
      [Validators.required, Validators.minLength(16), Validators.maxLength(16)],
    ]
   
  });
  ngOnInit() {
    // reset the login status
    this.authService.logout(false);

  
   
  }

  // tslint:disable-next-line: typedef
  submitForm() {
    // tslint:disable-next-line: radix
    this.isLaading = true;
    
    this.model.voucherID = parseInt(this.loginForm.value.voucherID);
    this.model.ip = this.ipAddress;
    // tslint:disable-next-line: radix
   
    this.model.code = this.loginForm.value.code;
    this.error = '';
    this.authService.Editlogin(this.model).subscribe(
      (result) => {
        // tslint:disable-next-line: triple-equals
        if (result.resultVoucherState == ResultVoucherState.Registered) {
         
            
              this.router.navigate(['dashboard/reg/uploadpicture']);
           
          
        }
        else if (result.resultVoucherState == ResultVoucherState.Captcha) {
         
          this.error = 'عبارت امنیتی را به درستی وارد نمایید';
        }
        else if (result.resultVoucherState == ResultVoucherState.Free) {
          this.error =
            'با این شماره پرونده قبلا ثبت نامي انجام نشده است؛ از بخش ثبت نام جديد، مي توانيد براي ثبت نام اقدام کنيد';
        } else if (result.resultVoucherState == ResultVoucherState.NotExist) {
          this.error = 'اطلاعاتی با مشخصات وارد شده يافت نشد';
        } else if (result.resultVoucherState == ResultVoucherState.NotMain) {
          this.error =
            'لطفا سريال ثبت نامي که در زمان ثبت نام وارد کرده بودید را وارد نمایید';
        } else if (
          result.resultVoucherState == ResultVoucherState.EditedNoExpire
        ) {
          this.error =
            'شما ' +
            result.editedNo +
            ' مرتبه اطلاعات خود را ویرایش کرده اید و مجاز به ویرایش مجدد نیستید';
        }
        this.isLaading = false;
         this.appDntCaptcha.doRefresh(); 
      },
      (error: HttpErrorResponse) => {
        this.isLaading = false;
      
        if (error.status === 401) {
           this.appDntCaptcha.doRefresh(); 
          this.error = 'داوطلبی با این مشخصات وجود ندارد.';
        } else {
          this.error = `${error.statusText}: ${error.message}`;
        }
      }
    );
  }

 


 
}
