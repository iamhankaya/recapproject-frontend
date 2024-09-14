import { PaymentDetail } from "./paymentDetail";
import { ResponseModelBase } from "./responseModelBase";

export interface PaymentDetailResponseModel extends ResponseModelBase{
    data:PaymentDetail[];
}