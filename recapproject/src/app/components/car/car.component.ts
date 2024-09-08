import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { NgFor } from '@angular/common';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [NgFor],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  constructor(private carService:CarService){

  }
  ngOnInit(): void {
      this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(respone =>{
      this.cars=respone.data;
    })
  }

}
