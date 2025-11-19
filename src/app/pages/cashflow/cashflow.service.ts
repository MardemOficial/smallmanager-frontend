import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CashflowInterface } from './cashflow.interface';
import { CashflowListInterface } from './cashflow-list.interface';

@Injectable({
  providedIn: 'root',
})
export class CashflowService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  cashflowList(page: number = 0): Observable<CashflowListInterface> {
    return this.http.get<CashflowListInterface>(`${this.API_URL}/cashflow`, {
      params: {
        page: page,
      },
      mode: 'cors',
      withCredentials: true,
    });
  }
}
