import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PositionInterface } from './position.interface';

@Injectable({
  providedIn: 'root',
})
export class PositionService {

    private API_URL = environment.apiUrl;
  
    constructor(private http: HttpClient){}

    positionList(page: number = 0): Observable<PositionInterface>{
      return this.http.get<PositionInterface>(`${this.API_URL}/position?page=${page}`, {withCredentials: true})
    }
}
