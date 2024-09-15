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
import { PaymentDetailService } from '../../services/payment-detail.service';
import { CreditCard } from '../../models/creditCard';
import { CreditCardService } from '../../services/credit-card.service';
import { Brand } from '../../models/brand';
import { Color } from '../../models/color';
import { BrandService } from '../../services/brand.service';
import { ColorService } from '../../services/color.service';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [NgFor, RouterModule, CarFilterPipe, FormsModule, NgIf, ColorComponent, BrandComponent, CarImagesComponent,ReactiveFormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands:Brand[] = [];
  colors:Color[] = [];
  carDetail: Car[] = [];
  currentCar: Car | null = null;
  filterText: string = "";
  isShowCarDetail: boolean = false;
  isUpdate =false;
  isRented: boolean = false;
  creditCard: CreditCard;
  carUpdateForm:FormGroup;

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private paymentDetailService: PaymentDetailService,
    private creditCardService: CreditCardService,
    private brandService:BrandService,
    private colorService:ColorService,
    private formBuilder:FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const carId = Number(params["carId"]);
      if (carId) {
        this.carService.getCars().subscribe(respone => {
          this.cars = respone.data;
          this.showCarDetail(carId);
          this.checkIsRented(this.carDetail[0]);
          this.createCarAddForm(carId);
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


  getCars() {
    this.carService.getCars().subscribe(respone => {
      this.cars = respone.data;
    })

  }

  createCarAddForm(carsId:number) {
    this.carUpdateForm = this.formBuilder.group({
      id:[carsId],
      brandId: [""],
      colorId: [""],
      modelYear: [""],
      dailyPrice: [""],
      description:[""]
    });

    console.log('Form Values After Patch:', this.carUpdateForm.value);
    this.getEntities();
  }

  getEntities() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      console.log(this.brands);
    });
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
      console.log(this.colors);
    })
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId)
      .subscribe(response => {
        this.cars = response.data;
      })
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId)
      .subscribe(response => {
        this.cars = response.data;
      })
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }

  showCarDetail(carId: number) {
    this.isShowCarDetail = true;
    this.carDetail = this.cars.filter((c: Car) => c.id === carId)
  }
  hideCarDetail() {
    this.isShowCarDetail = false;
  }

  checkIsRented(car: Car) {
    console.log(car.id);
    let Rentals;
    console.log(this.carDetail[0]);
    this.rentalService.getRentals().subscribe(response => {
      Rentals = response.data;
      let newArray = Rentals.filter((r: Rental) => r.returnDate === "Not Returned")
      console.log(newArray);
      newArray.forEach(element => {
        if (element.carId === car.id) {
          this.isRented = true;
        }
        console.log("checkIsRented sonu " + this.isRented);
      });
    });
  }
  rentCar(car: Car, creditCardId: number) {
    this.rentalService.rentCar(1, car.id).subscribe(response => {
      this.createPaymentDetail(car, creditCardId);
      this.updateCardLimit(creditCardId,car);
    });
    this.isRented = true;
  }

  returnCar(car: Car) {
    this.rentalService.returnCar(car.id).subscribe(response => {

    });
    this.isRented = false;
  }

  createPaymentDetail(car: Car, creditCardId: number) {
    this.paymentDetailService.createPaymentDetail(car, creditCardId).subscribe(response => {
    })
  }
  updateCardLimit(creditCardId: number, car: Car) {
    this.creditCardService.updateCreditCard(creditCardId, car.dailyPrice)
      .subscribe(response => {
        console.log('API Yanıtı:', response);
      }, error => {
        console.error('API Hatası:', error);
      });
  }
  showUpdate(){
    this.isUpdate= !this.isUpdate;
  }
  update(){
    console.log(this.carUpdateForm.value);
    if(this.carUpdateForm.valid){
      let carModel = Object.assign({}, this.carUpdateForm.value);
    this.carService.update(carModel).subscribe(resposne=>{
      console.log("Guncellendi");
    },responseError=>{
      console.log(responseError.error.Errors);
    });
    }
  }
}
