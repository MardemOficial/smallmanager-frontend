import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginInterface } from './login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient){}

  logar(login: LoginInterface): Observable<LoginInterface>{
    return this.http.post<LoginInterface>(`${this.API_URL}/authorization/login`, login, 
      {
        withCredentials: true
      });
  }
}
