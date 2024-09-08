import { Car } from "./car";
import { ResponseModelBase } from "./responseModelBase";

export interface CarResponseModel extends ResponseModelBase{
    data:Car[]
}