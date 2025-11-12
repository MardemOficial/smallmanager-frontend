import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PayrolltaxesInterface } from './payrolltaxes.interface';
import { PayrolltaxeslistInterface } from './payrolltaxeslist.interface';


@Injectable({
  providedIn: 'root',
})
export class PayrolltaxesService {
  
      private API_URL = environment.apiUrl;
    
      constructor(private http: HttpClient){}
  
      userList(page: number = 0): Observable<PayrolltaxeslistInterface>{
        return this.http.get<PayrolltaxeslistInterface>(`${this.API_URL}/payrolltaxes?page=${page}`, {withCredentials: true})
      }
}
