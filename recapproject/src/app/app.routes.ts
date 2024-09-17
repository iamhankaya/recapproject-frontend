import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarImagesComponent } from './components/car-images/car-images.component';
import { RentalComponent } from './components/rental/rental.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { loginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path: "",component:CarComponent,canActivate:[loginGuard]},
    {path: "cars",component:CarComponent,canActivate:[loginGuard]},
    {path: "cars/color/:colorId",component:CarComponent},
    {path: "cars/brand/:brandId",component:CarComponent},
    {path: "cars/images/:carId",component:CarComponent,canActivate:[loginGuard]},
    {path:"rentals",component:RentalComponent,canActivate:[loginGuard]},
    {path:"credit-cards",component:CreditCardComponent,canActivate:[loginGuard]},
    {path:"payment-details",component:PaymentDetailComponent,canActivate:[loginGuard]},
    {path:"brands/add",component:BrandAddComponent,canActivate:[loginGuard]},
    {path:"cars/add",component:CarAddComponent,canActivate:[loginGuard]},
    {path:"colors/add",component:ColorAddComponent,canActivate:[loginGuard]},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"users",component:UserComponent,canActivate:[loginGuard]}
];
