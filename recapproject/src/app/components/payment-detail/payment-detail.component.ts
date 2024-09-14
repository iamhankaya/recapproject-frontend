import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../services/payment-detail.service';
import { PaymentDetail } from '../../models/paymentDetail';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-payment-detail',
  standalone: true,
  imports: [NgFor],
  templateUrl: './payment-detail.component.html',
  styleUrl: './payment-detail.component.css'
})
export class PaymentDetailComponent implements OnInit {
  paymentDetails:PaymentDetail[] = [];
  constructor(private paymentDetailService:PaymentDetailService){}
  ngOnInit(): void {
      this.getPaymentDetails();
  }
  getPaymentDetails(){
    this.paymentDetailService.getPaymentDetails().subscribe(response=> {
      this.paymentDetails = response.data;
    })
  }
}
