import { ProductI } from './../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductI[]> {
    return this.http.get<ProductI[]>(this.apiURL);
  }
}
