import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Rental } from '../../models/rental';
import { RentalService } from '../../services/rental.service';
import { Car } from '../../models/car';



@Component({
  selector: 'app-rental',
  standalone: true,
  imports: [NgFor],
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit {
  rentals:Rental[]=[];
  constructor(private rentalService:RentalService){}
  ngOnInit(): void {
      this.getRentals();
  }
  getRentals():Rental[]{
    this.rentalService.getRentals().subscribe(response => {
      this.rentals=response.data;
      return response.data;
    })
    return this.rentals;
    
  }
  
}
