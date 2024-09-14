import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../../services/credit-card.service';
import { CreditCard } from '../../models/creditCard';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css'
})
export class CreditCardComponent implements OnInit {
  creditCards:CreditCard[] =[];
  constructor(private creditCardService:CreditCardService){}
  ngOnInit(): void {
      this.getCreditCards();
  }

  getCreditCards(){
    this.creditCardService.getCreditCard()
    .subscribe(response => {
      this.creditCards = response.data;
    })
  }
}
