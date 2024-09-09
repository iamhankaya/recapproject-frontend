import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImageResponseModel } from '../models/carImageResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:7102/api/"
  constructor(private httpClient:HttpClient) { }

  getImagesByCarId(carId:number):Observable<CarImageResponseModel>{
    let newPath =this.apiUrl+"CarImages/getbycarid?id="+carId
   return this.httpClient
   .get<CarImageResponseModel>(newPath);
  }
}
