import { Customer } from "./customer";
import { ResponseModelBase } from "./responseModelBase";

export interface UserResponseModel extends ResponseModelBase{
    data:Customer[]
}