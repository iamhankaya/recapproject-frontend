import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brand';
@Component({
  selector: 'app-brand-add',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './brand-add.component.html',
  styleUrl: './brand-add.component.css'
})
export class BrandAddComponent implements OnInit {
  brandAddForm:FormGroup;
  brands:Brand[] = [];
  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService
  ){}
  ngOnInit(): void {
     this.createBrandAddForm();
  }
  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      // brandId:[this.brands.length,Validators.required],
      brandName:["",Validators.required]
    });
  }
 
  add(){
    if(this.brandAddForm.valid){
      let brandModel = Object.assign({},this.brandAddForm.value);
      this.brandService.add(brandModel).subscribe(data=>{
        console.log(data.message);
      },responseError => {
        console.log(responseError.error.Errors);
      });
    }
    else{
      console.log("Hatalı bilgi girişi");
    }
  }
}
