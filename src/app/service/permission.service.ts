import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PermissionInterface } from '../interfaces/permission.interface';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  
   private API_URL = environment.apiUrl;

  constructor(private http: HttpClient){}

    permissions(): Observable<PermissionInterface[]>{
      return this.http.post<PermissionInterface[]>(`${this.API_URL}/user/permission`, {withCredentials: true});
    }
}
