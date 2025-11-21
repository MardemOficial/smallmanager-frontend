import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SalesListInterface } from './sales-list.interface';
import { InStoreListInterface } from './in-store-list.interface';
import { DeliveryListInterface } from './delivery-list.interface';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  salesList(page: number = 0): Observable<SalesListInterface> {
    return this.http.get<SalesListInterface>(`${this.API_URL}/sales`, {
      params: {
        page: page,
      },
      mode: 'cors',
      withCredentials: true,
    });
  }

  salesInStoreList(page: number = 0): Observable<InStoreListInterface> {
    return this.http.get<InStoreListInterface>(`${this.API_URL}/sales/instore`, {
      params: {
        page: page,
      },
      mode: 'cors',
      withCredentials: true,
    });
  }

  salesDeliveryList(page: number = 0): Observable<DeliveryListInterface> {
    return this.http.get<DeliveryListInterface>(`${this.API_URL}/sales/delivery`, {
      params: {
        page: page,
      },
      mode: 'cors',
      withCredentials: true,
    });
  }
}
