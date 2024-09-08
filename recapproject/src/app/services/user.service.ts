import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponseModel } from '../models/userResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string ="https://localhost:7102/api/Customers/GetCustomerDetails";

  getCustomers() :Observable<UserResponseModel>{
    return this.httpClient
    .get<UserResponseModel>(this.apiUrl);
  }
}
