import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PositionInterface } from './position.interface';
import { PositionListInterface } from './position-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PositionService {

    private API_URL = environment.apiUrl;
  
    constructor(private http: HttpClient){}

    positionList(page: number = 0): Observable<PositionListInterface>{
      return this.http.get<PositionListInterface>(`${this.API_URL}/profile`, {
        params:
         {
           page: page
         },
         mode: 'cors',
         withCredentials: true
        }
      )
    }

    positionSearch(label: string, page: number = 0): Observable<PositionListInterface>{
      return this.http.get<PositionListInterface>(`${this.API_URL}/profile/search`,
        {
        params: {
          label: label,
          page: page
         },
          withCredentials: true
        }
      )
    } 
}
