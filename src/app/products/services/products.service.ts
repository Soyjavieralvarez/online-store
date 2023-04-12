import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/interfaces';
import { enviroment } from 'src/environment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseURL: string = enviroment.baseURL;

  constructor( private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
   return this.http.get<Product[]>(`${ this.baseURL}/products`);
  }

  getProductForId( id: string ):Observable<Product> {
    return this.http.get<Product>(`${ this.baseURL}/products/${ id }`);
    
  }
}
