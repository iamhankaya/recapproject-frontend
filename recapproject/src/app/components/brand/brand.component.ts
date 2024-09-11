import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit{
  brands:Brand[]=[];
  currentBrand:string | null=null
  constructor(private brandService:BrandService,private router:Router){

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

  setCurrentBrand(brandId:string){
    this.currentBrand = brandId;
  }

  // getCurrentBrandClass(brand:Brand){
  //   if(brand==this.currentBrand){
  //     return "list-group-item active"
  //   }
  //   else{
  //     return "list-group-item";
  //   }
  // }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }

  emptyCurrentBrand(){
    this.currentBrand=null;
  }

  onBrandChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    if (selectedValue === '0') {
      this.emptyCurrentBrand(); // "Hepsini göster" seçeneği için çağrılacak işlev
      this.router.navigate(['/cars']);
    } else if (selectedValue) {
      this.setCurrentBrand(selectedValue); // Seçili rengi ayarlayın
      this.router.navigate(['/cars/brand', selectedValue]); // Angular yönlendirmesi
    }
  }
}
