import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarImagesComponent } from './components/car-images/car-images.component';
import { RentalComponent } from './components/rental/rental.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';

export const routes: Routes = [
    {path: "",component:CarComponent},
    {path: "cars",component:CarComponent},
    {path: "cars/color/:colorId",component:CarComponent},
    {path: "cars/brand/:brandId",component:CarComponent},
    {path: "cars/images/:carId",component:CarComponent},
    {path:"rentals",component:RentalComponent},
    {path:"credit-cards",component:CreditCardComponent},
    {path:"payment-details",component:PaymentDetailComponent}
];
