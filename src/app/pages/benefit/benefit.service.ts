import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BenefitInterface } from './benefit.interface';

@Injectable({
  providedIn: 'root',
})
export class BenefitService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  benefitList(page: number = 0): Observable<BenefitInterface> {
    return this.http.get<BenefitInterface>(`${this.API_URL}/benefit?page=${page}`, {
      withCredentials: true,
    });
  }
}
