import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarImage } from '../../models/carImage';
import { CarImageService } from '../../services/car-image.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-images',
  standalone: true,
  imports: [NgFor],
  templateUrl: './car-images.component.html',
  styleUrl: './car-images.component.css'
})
export class CarImagesComponent implements OnInit {
  carImages: CarImage[] = [];
  imageApi: string = "https://localhost:7102/images/"
  currentImage: CarImage;
  constructor(private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      this.setCurrentImage();
    })
  }
  getImagePath(carImage: CarImage) {
      let newApi = this.imageApi + carImage.imagePath;
      return newApi;
      
    // let newApi = this.imageApi + carImage.imagePath;
    // console.log(this.carImages.length);
    // console.log(newApi);
    // return newApi;
  }

  setCurrentImage() {
    if (!this.currentImage) {
      this.currentImage = this.carImages[0];
    }
  }

  getCurrentImage(image: CarImage) {
    if (this.currentImage === image) {
      return "carousel-item active"
    }
    else {
      return "carousel-item"
    }
  }

  previousButton() {
    let newCarImage: CarImage[] = this.carImages.filter((c: CarImage) => c.id === this.currentImage.id - 1)
    if (newCarImage.length > 0) {
      this.currentImage = newCarImage[0];
    }
  }
  nextButton() {
    let newCarImage: CarImage[] = this.carImages.filter((c: CarImage) => c.id === this.currentImage.id + 1)
    if (newCarImage.length > 0) {
      this.currentImage = newCarImage[0];
    }
  }
}
