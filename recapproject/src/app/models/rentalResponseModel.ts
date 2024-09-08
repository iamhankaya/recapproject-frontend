import { Rental } from "./rental";
import { ResponseModelBase } from "./responseModelBase";

export interface RentalResponseModel extends ResponseModelBase{
    data:Rental[]
}