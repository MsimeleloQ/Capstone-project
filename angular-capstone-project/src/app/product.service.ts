import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>('http://localhost:3000/products')
  }
}
