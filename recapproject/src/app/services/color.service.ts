import { Injectable } from '@angular/core';
import { ColorResponseModel } from '../models/colorResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string ="https://localhost:7102/api/Colors/ColorsGetAll";

  getColors():Observable<ColorResponseModel>{
    return this.httpClient
    .get<ColorResponseModel>(this.apiUrl);
  }
}
