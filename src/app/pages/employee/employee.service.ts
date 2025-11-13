import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EmployeeInterface } from './employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
    private API_URL = environment.apiUrl;
  
    constructor(private http: HttpClient) {}
  
    benefitList(page: number = 0): Observable<EmployeeInterface> {
      return this.http.get<EmployeeInterface>(`${this.API_URL}/employee?page=${page}`, {
        withCredentials: true,
      });
    }
}
