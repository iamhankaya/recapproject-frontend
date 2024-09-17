import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder,FormControl,Validators,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerAddModel } from '../../models/customerAddModel';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private loginService:LoginService,
    private formBuilder:FormBuilder
  ) {}
  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
      let registerModel = this.registerForm.value;
      this.loginService.register(registerModel).subscribe(response => {
         localStorage.setItem("token",response.data.token);
         localStorage.setItem("customerName",this.registerForm.get('firstName')?.value+" "+this.registerForm.get('lastName')?.value);
         console.log(localStorage.getItem("customerName"));
      })
    }
  }
}
