import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  currentColor:string | null=null
  constructor(private colorService:ColorService,private router:Router){}
  ngOnInit(): void {
      this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors=response.data;
    })
  }

  setCurrentColor(colorId:string){
    this.currentColor = colorId;
  }
  // getCurrentColorClass(color:Color){
  //   if(color==this.currentColor){
  //     return "list-group-item active"
  //   }
  //   else{
  //     return "list-group-item"
  //   }
  // }
  emptyCurrentColor(){
    this.currentColor = null;
  }
  
  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active";
    }
    else{
      return "list-group-item";
    }
  }

  onColorChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    if (selectedValue === '0') {
      this.emptyCurrentColor(); // "Hepsini göster" seçeneği için çağrılacak işlev
      this.router.navigate(['/cars']);
    } else if (selectedValue) {
      this.setCurrentColor(selectedValue); // Seçili rengi ayarlayın
      this.router.navigate(['/cars/color', selectedValue]); // Angular yönlendirmesi
    }
  }
}
