import { Component, NgModule, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { NgFor, NgIf } from '@angular/common';
import { CarService } from '../../services/car.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CarFilterPipe } from '../../pipes/car-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ColorComponent } from "../color/color.component";
import { BrandComponent } from "../brand/brand.component";
import { CarImagesComponent } from "../car-images/car-images.component";
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [NgFor, RouterModule, CarFilterPipe, FormsModule, NgIf, ColorComponent, BrandComponent, CarImagesComponent],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  carDetail:Car[]=[];
  currentCar:Car | null=null;
  filterText:string= "";
  isShowCarDetail:boolean =false;
  isRented:boolean=false;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private rentalService:RentalService
  ){

  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const carId = Number(params["carId"]);
  
      if (carId) {
        this.carService.getCars().subscribe(respone =>{
          this.cars=respone.data;
          this.showCarDetail(carId);
          this.checkIsRented(this.carDetail[0]);

        })
      } else {
        // carId mevcut değilse diğer işlemleri yap
        if (params["brandId"]) {
          this.getCarsByBrandId(params["brandId"]);
        } else if (params["colorId"]) {
          this.getCarsByColorId(params["colorId"]);
        } else {
          this.getCars();
        }
      }
    });
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
  }

  showCarDetail(carId:number){
    this.isShowCarDetail=true;
    this.carDetail = this.cars.filter((c:Car) => c.id === carId)
  }
  hideCarDetail(){
    this.isShowCarDetail=false;
  }

  checkIsRented(car:Car){
    console.log(car.id);
    let Rentals;
    console.log(this.carDetail[0]);
    this.rentalService.getRentals().subscribe(response => {
      Rentals = response.data;
      let newArray = Rentals.filter((r:Rental)  => r.returnDate === "Not Returned")
      console.log(newArray);
      newArray.forEach(element => {
        if(element.carId === car.id){
          this.isRented=true;
        }
        console.log("checkIsRented sonu "+this.isRented);
      });
    });
  }
  rentCar(car:Car){
    this.rentalService.rentCar(1,car.id).subscribe(response => {
      console.log(response.success);
    });
    this.isRented=true;
    
    
  }

  returnCar(car:Car){
    this.rentalService.returnCar(car.id).subscribe(response  => {
      console.log(response.success);
    });
    this.isRented=false;
  }
}
