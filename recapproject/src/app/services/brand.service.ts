import { Injectable } from '@angular/core';
import { BrandResponseModel } from '../models/brandResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string ="https://localhost:7102/api/Brands/BrandsGetAll";

  getBrands():Observable<BrandResponseModel>{
    return this.httpClient
    .get<BrandResponseModel>(this.apiUrl);
  }
}
