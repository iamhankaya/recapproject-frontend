import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string ="https://localhost:7102/api/Cars/GetCarDetails";

  getCars(): Observable<CarResponseModel>{
   return this.httpClient
    .get<CarResponseModel>(this.apiUrl);
  }
}
