import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { naviElement } from '../../models/naviElement';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [NgFor,RouterLink,NgIf],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent implements OnInit {

  isLogin:boolean = false;
  currentCustomerName = localStorage.getItem("customerName");
  elements:naviElement[] = [
    {element:"Car" ,url:"/cars"},
    {element:"Credit Card" ,url:"/credit-cards"},
    {element:"Payment Detail" ,url:"/payment-details"},
    {element:"Rental" ,url:"/rentals"},
    {element:"User" ,url:"/users"},
    {element:"Car-add",url:"/cars/add"},
    {element:"Brand-add",url:"/brands/add"},
    {element:"Color-add",url:"/colors/add"}
  ];
  constructor(private loginService:LoginService){}
ngOnInit(): void {
  this.loginService.isLogin$.subscribe(loginStatus => {
    this.isLogin = loginStatus;
    console.log(this.isLogin);
  })
}
logout(){
  this.loginService.logout();
  localStorage.removeItem("customerName");
}

}
