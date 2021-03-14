import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  apiUrl = 'https://localhost:44368/api/categories/getall';


  //bunu injecte edebilmek için app.modulede ekle
  constructor(private httpClient: HttpClient) {}



  
  getCategories():Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }


}
