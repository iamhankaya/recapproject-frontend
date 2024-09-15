import { Injectable } from '@angular/core';
import { BrandResponseModel } from '../models/brandResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModelBase } from '../models/responseModelBase';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string ="https://localhost:7102/api/";

  getBrands():Observable<BrandResponseModel>{
    let getAllApi ="Brands/BrandsGetAll";
    return this.httpClient
    .get<BrandResponseModel>(this.apiUrl+getAllApi);
  }

  add(brand:Brand):Observable<ResponseModelBase> {
    let addApi= "Brands/BrandsAdd";
    return this.httpClient
    .post<ResponseModelBase>(this.apiUrl+addApi,brand);
  }
}
