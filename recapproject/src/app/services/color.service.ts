import { Injectable } from '@angular/core';
import { ColorResponseModel } from '../models/colorResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ResponseModelBase } from '../models/responseModelBase';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }
  apiUrl:string ="https://localhost:7102/api/";

  getColors():Observable<ColorResponseModel>{
    let newPath=this.apiUrl+"Colors/ColorsGetAll"
    return this.httpClient
    .get<ColorResponseModel>(newPath);
  }

  add(color:Color):Observable<ResponseModelBase>{
    let newPath = this.apiUrl+"Colors/ColorsAdd";
    return this.httpClient.post<ResponseModelBase>(newPath,color);
  }
}
