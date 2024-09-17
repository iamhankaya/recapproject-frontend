import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { TokenOptions } from '../../models/tokenOptions';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentCustomer: Customer;
  customers: Customer[] = [];
  isLogin:boolean=false;
  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private userService: UserService
  ) { }
  ngOnInit(): void {
    this.getCustomers();
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value);
      this.loginService.login(loginModel).subscribe(response => {
        this.setCurrentCustomer();
        localStorage.setItem("token", response.data.token);
        console.log("Token başarıyla oluşturuldu");
        this.router.navigate(["cars"]);
      }, responseError => {
        console.log(responseError.error.Errors);
      })
    }
  }

  setCurrentCustomer() {
    console.log(this.customers);
    let email = this.loginForm.get("email")?.value;
    this.customers.forEach(customer => {
      if (customer.email == email) {
        this.currentCustomer = customer;
      }
    });
    if(this.currentCustomer==null){

    }
    localStorage.setItem("customerName",this.currentCustomer.firstName+" "+this.currentCustomer.lastName);
  }
  getCustomers() {
    this.userService.getCustomers().subscribe(response => {
      this.customers = response.data;
    })
  }
}
