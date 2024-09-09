import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';

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
}
