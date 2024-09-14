import { CreditCard } from "./creditCard";
import { ResponseModelBase } from "./responseModelBase";

export interface CreditCardResponseModel extends ResponseModelBase{
    data:CreditCard[];
}