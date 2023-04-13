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

  getSuggestions( term: string):Observable<Product[]> {
    return this.http.get<Product[]>(`${ this.baseURL }/products?q=${term}&_limit=10`);
  }

  addProduct(product : Product):Observable<Product> {
    return this.http.post<Product>(`${ this.baseURL}/products`, product);
  }

  updateProduct(product : Product):Observable<Product> {
    return this.http.put<Product>(`${ this.baseURL}/products/${ product.id }`, product);
  }

  deleteProduct( id: string ):Observable<any> {
    return this.http.delete<any>(`${ this.baseURL}/products/${ id }`);
  }
}
