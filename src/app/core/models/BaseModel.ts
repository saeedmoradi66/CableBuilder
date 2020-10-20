import { PageStep } from '../Enums/PageStep';
import { LoginType } from '../Enums/LoginType';

export class BaseModel {
  
  loginType: LoginType;
 
  result: number;
  iP: string;
  isAllowRegister: boolean;
  image: string;
  errorList: string[];
  isNew: boolean;
  msg: string;
}
