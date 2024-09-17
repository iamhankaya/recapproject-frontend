import { LoginModel } from "./loginModel";
import { ResponseModelBase } from "./responseModelBase";
import { TokenOptions } from "./tokenOptions";

export interface LoginResponseModel extends ResponseModelBase{
    data:TokenOptions
}