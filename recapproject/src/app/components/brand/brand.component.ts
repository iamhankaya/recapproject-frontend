import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit{
  brands:Brand[]=[];
  currentBrand:Brand | null=null
  constructor(private brandService:BrandService){

  }

  ngOnInit(): void {
      this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands()
    .subscribe(response => {
      this.brands=response.data;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
    console.log(brand.brandId)
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item";
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }

  empyyCurrentBrand(){
    this.currentBrand=null;
  }
}
