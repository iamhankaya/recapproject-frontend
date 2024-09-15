import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarService } from '../../services/car.service';
import { NgFor } from '@angular/common';
import { Brand } from '../../models/brand';
import { Color } from '../../models/color';
import { BrandService } from '../../services/brand.service';
import { ColorService } from '../../services/color.service';
import { Car } from '../../models/car';
@Component({
  selector: 'app-car-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './car-add.component.html',
  styleUrl: './car-add.component.css'
})
export class CarAddComponent implements OnInit {
  carAddForm: FormGroup;
  brands: Brand[] = [];
  colors: Color[] = [];
  constructor(private carService: CarService,
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private colorService: ColorService
  ) { }
  ngOnInit(): void {
    this.createCarAddForm();
  }
  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description:["",Validators.required]
    });
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

  add() {
    if (this.carAddForm.valid) {
      let carModel:Car = Object.assign({}, this.carAddForm.value);
      this.carService.add(carModel).subscribe(response=>{
        console.log(response.message);
      },(responseError) => {
        console.log(responseError.error.Errors);
      })
    }
  }
}
