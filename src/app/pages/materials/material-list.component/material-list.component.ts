import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { PaginationClass } from '../../../classes/pagination.class';
import { MaterialTypeEnum, MATERIAL_TYPE_LABELS } from '../../../enums/materialtype.enum';
import { MaterialService } from '../material.service';
import { MaterialsInterface } from '../materials.interface';

@Component({
  selector: 'sm-material-list.component',
  imports: [
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
export class MaterialListComponent {

  listMaterial: MaterialsInterface[] = [
    {id: "1", name: "CALABRESA", typeMaterial: MaterialTypeEnum.MATERIA_PRIMA},
    {id: "2", name: "BACON", typeMaterial: MaterialTypeEnum.MATERIA_PRIMA}
  ];

  materialForm = new FormGroup({
    name: new FormControl(''),
    typeMaterial: new FormControl<MaterialTypeEnum | null>(null),
  });

  materialTypes = Object.values(MaterialTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as MaterialTypeEnum[];
  materialTypeLabels = MATERIAL_TYPE_LABELS;

    constructor(
      private materialService: MaterialService,
      private snackBar: MatSnackBar,
      private paginationClass: PaginationClass
    ) {}
}
