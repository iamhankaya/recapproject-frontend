import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Car } from '../models/car';

@Pipe({
  name: 'carFilter',
  standalone: true
})
export class CarFilterPipe implements PipeTransform {

  transform(value: Car[], filterText:string): Car[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value
    .filter((p:Car) => p.description.toLocaleLowerCase().indexOf(filterText) !== -1
    ):value;
  }

}
