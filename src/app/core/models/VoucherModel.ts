import { ResultVoucherState } from '../Enums/ResultVoucherState';
import { LoginType } from '../Enums/LoginType';
import { PageStep } from '../Enums/PageStep';


export class VoucherModel {
  voucherID: number = 0;
  code: string = '';
  serial: number = 0;
  isUsed: boolean = false;
  editedNo: number = 0;
  ip: string = '';
  
  resultVoucherState: ResultVoucherState = ResultVoucherState.NotExist;
  loginTypeID: number = 0;
  serialNumber: string = '';
  isMain: boolean = false;
  password: string = '';
  loginType: LoginType = LoginType.None;
  nationalID: string = '';

  certificateNo: string = '';
 
DNTCaptchaText:string = "";
  DNTCaptchaToken:string = "";
  DNTCaptchaInputText :string= "";



  
       
       
        
}
