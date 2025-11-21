import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BenefitInterface } from './benefit.interface';
import { BenefitListInterface } from './benefit-list.interface';

@Injectable({
  providedIn: 'root',
})
export class BenefitService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  saveBenefit(benefit: BenefitInterface): Observable<BenefitInterface>{
     return this.http.post<BenefitInterface>(
    `${this.API_URL}/benefit`,
    benefit,
    { withCredentials: true }
  ).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Erro ao salvar benefício:', error);

      return throwError(() => new Error(
        error.error?.message || 'Erro ao salvar benefício'
      ));
    })
  );
  }

  benefitList(page: number = 0): Observable<BenefitListInterface> {
    return this.http.get<BenefitListInterface>(`${this.API_URL}/benefit`, {
      params: {
        page: page,
      },
      mode: 'cors',
      withCredentials: true,
    });
  }
}
