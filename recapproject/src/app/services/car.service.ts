import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
import { ResponseModelBase } from '../models/responseModelBase';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string ="https://localhost:7102/api/";

  getCars(): Observable<CarResponseModel>{
    let newPath =this.apiUrl+"Cars/GetCarDetails"
   return this.httpClient
    .get<CarResponseModel>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<CarResponseModel>{
    let newPath =this.apiUrl+"Cars/GetAllByBrandId?id="+brandId
    return this.httpClient
    .get<CarResponseModel>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<CarResponseModel>{
    let newPath =this.apiUrl+"Cars/GetAllByColorId?id="+colorId
    return this.httpClient
    .get<CarResponseModel>(newPath);
  }

  add(car:Car):Observable<ResponseModelBase>{
    let newPath = this.apiUrl+"Cars/CarsAdd";
    return this.httpClient.post<ResponseModelBase>(newPath,car);
  }
  update(car:Car):Observable<ResponseModelBase>{
    console.log(car);
    let newPath = this.apiUrl+"Cars/CarsUpdate";
    return this.httpClient.post<ResponseModelBase>(newPath,car);
  }
}
