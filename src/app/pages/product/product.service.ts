import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ProductInterface } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

   private API_URL = environment.apiUrl;
  
    constructor(private http: HttpClient) {}
  
    productList(page: number = 0): Observable<ProductInterface[]> {
      return this.http.get<ProductInterface[]>(`${this.API_URL}/product?page=${page}`, {
        withCredentials: true,
      });
    }

    save(product: ProductInterface): Observable<ProductInterface>{
      return this.http.post<ProductInterface>(`${this.API_URL}/product?`, { withCredentials: true })
    }
}
