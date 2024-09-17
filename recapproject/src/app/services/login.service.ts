import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponseModel } from '../models/loginResponseModel';
import { UserForRegister } from '../models/userForRegisterModel';
import { UserForRegisterResponseModel } from '../models/userForRegisterResponseModel';
import { ResponseModelBase } from '../models/responseModelBase';
import { CustomerAddModel } from '../models/customerAddModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = "https://localhost:7102/api/"
  private isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  isLogin$ = this.isLoginSubject.asObservable();
  
  constructor(private httpClient:HttpClient) { }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{

      return false;
    }
  }

  register(userForRegister:UserForRegister):Observable<UserForRegisterResponseModel>{
    let newPath = this.apiUrl+"Auth/Register";
    this.isLoginSubject.next(true);
    return this.httpClient.post<UserForRegisterResponseModel>(newPath,userForRegister)
  }

  login(user:LoginModel):Observable<LoginResponseModel>{
    let newPath=this.apiUrl+"Auth/Login";
    this.isLoginSubject.next(true);
    return this.httpClient.post<LoginResponseModel>(newPath,user);
  }

  logout(){
    this.isLoginSubject.next(false);
    localStorage.removeItem("token");
    localStorage.removeItem("customerName");
  }

  createCustomer(customer:CustomerAddModel):Observable<ResponseModelBase>{
    let newPath = this.apiUrl+"Customers/CustomersAdd";
    return this.httpClient.post<ResponseModelBase>(newPath,customer);
  }
}
