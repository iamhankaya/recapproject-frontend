import { ResponseModelBase } from "./responseModelBase";
import { TokenOptions } from "./tokenOptions";

export interface UserForRegisterResponseModel extends ResponseModelBase{
    data:TokenOptions
}