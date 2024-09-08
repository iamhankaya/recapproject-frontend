import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit{
  brands:Brand[]=[];
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
}
