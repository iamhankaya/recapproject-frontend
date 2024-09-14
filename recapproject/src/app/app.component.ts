import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { UserComponent } from './components/user/user.component';
import { NgFor, NgIf } from '@angular/common';
import { NaviComponent } from "./components/navi/navi.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrandComponent, CarComponent, ColorComponent, RentalComponent, UserComponent, NgFor, NgIf, NaviComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recapproject';
}
