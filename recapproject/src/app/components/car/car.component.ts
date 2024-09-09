import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { NgFor } from '@angular/common';
import { CarService } from '../../services/car.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  currentCar:Car |null=null;
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"]);
      }
      else{
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(respone =>{
      this.cars=respone.data;
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId)
    .subscribe(response => {
      this.cars=response.data;
    })
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId)
    .subscribe(response => {
      this.cars=response.data;
    })
  }

  setCurrentCar(car:Car){
    this.currentCar=car;
    console.log(this.currentCar);
  }
}
