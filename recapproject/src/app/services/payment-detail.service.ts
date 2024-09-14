import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentDetailResponseModel } from '../models/paymentDetailResponseModel';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CreditCard } from '../models/creditCard';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  apiUrl = "https://localhost:7102/api/PaymentDetails/"
  constructor(private httpClient: HttpClient) { }

  getPaymentDetails(): Observable<PaymentDetailResponseModel> {
    let newUrl =this.apiUrl+"GetAll"
    return this.httpClient.get<PaymentDetailResponseModel>(newUrl);
  }

  createPaymentDetail(car:Car,creditCardId:number):Observable<PaymentDetailResponseModel>{
    let newUrl =this.apiUrl+"CreatePaymentDetail?cardId="+creditCardId+"&carId="+car.id+"&paymentAmount="+car.dailyPrice+"+&description="+car.description;
    return this.httpClient.post<PaymentDetailResponseModel>(newUrl,{})
  }
}
