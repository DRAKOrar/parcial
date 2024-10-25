import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://api.escuelajs.co/api/v1/products';
  categoryApiUrl = 'https://api.escuelajs.co/api/v1/categories';

  constructor(private http: HttpClient) {}

  
  getAllProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  
  getProductsByCategory(categoryId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/?categoryId=${categoryId}`);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(this.categoryApiUrl);
  }

  addProduct(productData: any): Observable<any> {
    return this.http.post(this.apiUrl, productData);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${productId}`);
  }
}
