import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MaterialsInterface } from './materials.interface';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  
   private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

    materialList(page: number = 0): Observable<MaterialsInterface> {
      return this.http.get<MaterialsInterface>(`${this.API_URL}/material?page=${page}`, {
        withCredentials: true,
      });
    }
}
