import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string ="https://localhost:7102/api/Rentals/";
  getUrl:string ="GetRentalDetails";
rentUrl:string ="RentCar?customerId=1&carId=1"

  getRentals():Observable<RentalResponseModel>{
    return this.httpClient
    .get<RentalResponseModel>(this.apiUrl+this.getUrl);
  }

  rentCar(customerId:number,carId:number){
  let rentUrl:string ="RentCar?customerId="+customerId+"&carId="+carId
    return this.httpClient
    .post<RentalResponseModel>(this.apiUrl+rentUrl,{});
  }

  returnCar(carId:number){
    let returnUrl:string = "ReturnCar?carId="+carId;
    return this.httpClient
    .post<RentalResponseModel>(this.apiUrl+returnUrl,{});
  }
}
