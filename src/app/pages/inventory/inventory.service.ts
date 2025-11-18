import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { InventoryListInterface } from './inventory-list.interface';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

   private API_URL = environment.apiUrl;
  
    constructor(private http: HttpClient) {}
  
    inventoryList(page: number = 0): Observable<InventoryListInterface>{
      return this.http.get<InventoryListInterface>(`${this.API_URL}/inventory`, {
        params:
         {
           page: page
         },
         mode: 'cors',
         withCredentials: true
        }
      )
    }
}
