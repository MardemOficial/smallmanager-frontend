import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MaterialsInterface } from './materials.interface';
import { MaterialListInterface } from './material-list.interface';
import { MaterialTypeEnum, MATERIAL_TYPE_LABELS } from './materialtype.enum';
import {
  UNIT_ON_MEANSURE_TYPE_LABELS,
  UnitOfMeansureTypeEnum,
} from '../../enums/unit-of-meansure-type.enum';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  private API_URL = environment.apiUrl;

  materialTypes = Object.values(MaterialTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as MaterialTypeEnum[];
  materialTypesLabels = MATERIAL_TYPE_LABELS;

  unitOfMeansureType = Object.values(UnitOfMeansureTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as UnitOfMeansureTypeEnum[];
  unitOfMeansureTypeLabels = UNIT_ON_MEANSURE_TYPE_LABELS;

  constructor(private http: HttpClient) {}

  saveMaterial(material: MaterialsInterface): Observable<MaterialsInterface> {
    return this.http
      .post<MaterialsInterface>(`${this.API_URL}/material`, material, {
        withCredentials: true,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erro ao salvar material:', error);

          return throwError(() => new Error(error.error?.message || 'Erro ao salvar material'));
        })
      );
  }

  materialList(page: number = 0): Observable<MaterialListInterface> {
    return this.http.get<MaterialListInterface>(`${this.API_URL}/material`, {
      params: {
        page: page,
      },
      withCredentials: true,
    });
  }

  materialSearchList(
    name?: string,
    type?: MaterialTypeEnum,
    page: number = 0
  ): Observable<MaterialListInterface> {
    let params = new HttpParams().set('page', page);

    if (name) {
      params = params.set('name', name);
    }

    if (type !== null && type !== undefined) {
      params = params.set('type', type);
    }

    return this.http.get<MaterialListInterface>(`${this.API_URL}/material/search`, {
      params: params,
      withCredentials: true,
    });
  }

  getMaterial(url: string): Observable<MaterialsInterface> {
    return this.http.get<MaterialsInterface>(url, { withCredentials: true })
    .pipe(
      map((material) => ({
        ...material,
        materialTypeEnum: this.materialTypes[material.materialTypeEnum],
        unitOfMeasureTypeEnum: this.unitOfMeansureType[material.unitOfMeasureTypeEnum],
      }))
    );
  }
}
