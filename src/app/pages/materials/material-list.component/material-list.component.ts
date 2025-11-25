import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule, Router } from '@angular/router';
import { PaginationClass } from '../../../classes/pagination.class';
import {
  MaterialTypeEnum,
  MATERIAL_TYPE_LABELS,
  MATERIAL_TYPES_STRING,
} from '../materialtype.enum';
import { MaterialService } from '../material.service';
import { MaterialsInterface } from '../materials.interface';
import { PaginationListClass } from '../../../classes/pagination-list.class';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'sm-material-list.component',
  imports: [
    MatProgressSpinnerModule,
    MatIcon,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './material-list.component.html',
  styleUrl: './material-list.component.scss',
})
export class MaterialListComponent extends PaginationListClass {
  listMaterial: MaterialsInterface[] = [];

  materialForm = new FormGroup({
    name: new FormControl(''),
    materialTypeEnum: new FormControl<MaterialTypeEnum | null>(null),
  });

  materialTypes = Object.values(MaterialTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as MaterialTypeEnum[];
  materialTypeLabels = MATERIAL_TYPE_LABELS;
  materialTypeString = MATERIAL_TYPES_STRING;

  constructor(
    private materialService: MaterialService,
    private snackBar: MatSnackBar,
    private paginationClass: PaginationClass,
    private router: Router
  ) {
    super();
    this.materialListSearch();
    console.log(this.listMaterial);
  }

  materialListSearch() {
    this.materialService
      .materialList(this.pageCurrent)
      .pipe(
        catchError((err) => {
          this.snackBar.open(`${err}`, 'Ok', { duration: 5000 });
          return throwError(() => err);
        })
      )
      .subscribe((materials) => {
        this.listMaterial = materials.materialList;
        this.pageCurrent = materials.page;
        this.sizePage = materials.limit;
      });
  }

  materialSearch(event: Event) {
    event.preventDefault();
    const { name, materialTypeEnum } = this.materialForm.getRawValue();
    this.materialService
      .materialSearchList(name ?? undefined, materialTypeEnum ?? undefined, this.pageCurrent)
      .pipe(
        catchError((err) => {
          this.snackBar.open(`${err}`, 'Ok', { duration: 5000 });
          return throwError(() => err);
        })
      )
      .subscribe((materials) => {
        this.listMaterial = materials.materialList;
        this.pageCurrent = materials.page;
        this.sizePage = materials.limit;
      });
  }

  edit(url: string) {
    this.router.navigate(['/home/material/form'], { queryParams: { link: url } });
  }

  delete(url: string) {
    console.log(url);
  }

  clear() {
    this.materialForm.reset();
    this.materialListSearch();
  }
}
