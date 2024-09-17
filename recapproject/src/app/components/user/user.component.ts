import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  customers:Customer[] = [];
  constructor(private userService:UserService){}
  ngOnInit(): void {
      this.getUsers();
  }
  getUsers(){
    this.userService.getCustomers().subscribe(response => {
      console.log(response);
      this.customers=response.data;
    })
  }
}
