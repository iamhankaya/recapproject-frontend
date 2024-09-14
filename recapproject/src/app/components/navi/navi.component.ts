import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { naviElement } from '../../models/naviElement';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {
  elements:naviElement[] = [
    {element:"Car" ,url:"/cars"},
    {element:"Credit Card" ,url:"/credit-cards"},
    {element:"Payment Detail" ,url:"/payment-details"},
    {element:"Rental" ,url:"/rentals"},
    {element:"User" ,url:"/users"},
  ];

}
