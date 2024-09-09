import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarImagesComponent } from './components/car-images/car-images.component';

export const routes: Routes = [
    {path: "",component:CarComponent},
    {path: "cars",component:CarComponent},
    {path: "cars/color/:colorId",component:CarComponent},
    {path: "cars/brand/:brandId",component:CarComponent},
    {path: "cars/images/:carId",component:CarImagesComponent}
];
