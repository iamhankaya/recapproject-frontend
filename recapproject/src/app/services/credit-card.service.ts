import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCardResponseModel } from '../models/creditCardResponseModel';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  apiUrl:string= "https://localhost:7102/api/" 
  constructor(private httpClient:HttpClient) { }

  getCreditCard():Observable<CreditCardResponseModel>{
    let newApi:string =this.apiUrl+"CreditCards/CreditCardGetAll";
   return this.httpClient.get<CreditCardResponseModel>(newApi);
  }

  getCreditCardById(creditCardId:number):Observable<CreditCard>{
    let newApi:string = this.apiUrl+"CreditCards/GetById?id="+creditCardId;
    return this.httpClient.get<CreditCard>(newApi);
  }

  updateCreditCard(creditCardNo:number,paymentAmount:number):Observable<CreditCardResponseModel>{
    let newApi:string = this.apiUrl+"CreditCards/UpdateCardLimit?cardNo="+creditCardNo+"&paymentAmount="+paymentAmount;
    console.log(newApi);
    return this.httpClient.post<CreditCardResponseModel>(newApi,{});
    
  }
}
