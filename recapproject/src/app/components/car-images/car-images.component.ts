import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarImage } from '../../models/carImage';
import { CarImageService } from '../../services/car-image.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-car-images',
  standalone: true,
  imports: [NgFor],
  templateUrl: './car-images.component.html',
  styleUrl: './car-images.component.css'
})
export class CarImagesComponent implements OnInit {
  carImages:CarImage[] = [];
  imageApi:string ="https://localhost:7102/images/"
  constructor(private carImageService:CarImageService,
   private activatedRoute:ActivatedRoute
  ){}
  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if(params["carId"]){
          this.getCarImagesByCarId(params["carId"]);
        }
      })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      console.log(this.carImages.length);
      console.log(this.carImages[0].imagePath)
    })
  }
  getImagePath(carImage:CarImage){
    let newApi=this.imageApi+carImage.imagePath;
    return newApi;
  }
}
