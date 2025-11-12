import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UsuarioInterface } from './usuario.interface';
import { UsuarioListInterface } from './usuario-list.interface';


@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

    private API_URL = environment.apiUrl;
  
    constructor(private http: HttpClient){}

    userList(page: number = 0): Observable<UsuarioListInterface>{
      return this.http.get<UsuarioListInterface>(`${this.API_URL}/user?page=${page}`, {withCredentials: true})
    }

}
