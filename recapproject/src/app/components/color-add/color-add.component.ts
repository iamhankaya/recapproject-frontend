import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color-add',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './color-add.component.html',
  styleUrl: './color-add.component.css'
})
export class ColorAddComponent implements OnInit {
  colorAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService
  ){}
  ngOnInit(): void {
     this.createColorAddForm();
  }
  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      // brandId:[this.brands.length,Validators.required],
      colorName:["",Validators.required]
    });
  }
 
  add(){
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({},this.colorAddForm.value);
      this.colorService.add(colorModel).subscribe(data=>{
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
