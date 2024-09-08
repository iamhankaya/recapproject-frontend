import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string ="https://localhost:7102/api/Rentals/GetRentalDetails";

  getRentals():Observable<RentalResponseModel>{
    return this.httpClient
    .get<RentalResponseModel>(this.apiUrl);
  }
}
