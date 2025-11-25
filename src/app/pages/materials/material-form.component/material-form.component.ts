import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialTypeEnum, MATERIAL_TYPE_LABELS } from '../materialtype.enum';
import { MaterialService } from '../material.service';
import { MaterialsInterface } from '../materials.interface';
import {
  UNIT_ON_MEANSURE_TYPE_LABELS,
  UnitOfMeansureTypeEnum,
} from '../../../enums/unit-of-meansure-type.enum';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs';

@Component({
  selector: 'sm-material-form.component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
  ],
  templateUrl: './material-form.component.html',
  styleUrl: './material-form.component.scss',
})
export class MaterialFormComponent {
  private urlLink?: string;
  listMaterial: MaterialsInterface[] = [];

  materialGroup = new FormGroup({
    sku: new FormControl('', { validators: Validators.required, nonNullable: true }),
    name: new FormControl('', { validators: Validators.required, nonNullable: true }),
    cost: new FormControl(0, { validators: Validators.min(0), nonNullable: true }),
    materialTypeEnum: new FormControl<MaterialTypeEnum>(MaterialTypeEnum.RAW_MATERIAL, {
      validators: Validators.required,
      nonNullable: true,
    }),
    unitOfMeasureTypeEnum: new FormControl<UnitOfMeansureTypeEnum>(UnitOfMeansureTypeEnum.UNIT, {
      validators: Validators.required,
      nonNullable: true,
    }),
    unitValue: new FormControl(0, { validators: Validators.min(0), nonNullable: true }),
    description: new FormControl<string | null>(''),
  });

  materialTypes = Object.values(MaterialTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as MaterialTypeEnum[];
  materialTypeLabels = MATERIAL_TYPE_LABELS;

  unitOfMeansureType = Object.values(UnitOfMeansureTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as UnitOfMeansureTypeEnum[];
  unitOfMeansureTypeLabels = UNIT_ON_MEANSURE_TYPE_LABELS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private materialService: MaterialService
  ) {

    this.route.queryParams.subscribe(params => {
      this.urlLink = params['link'];
    });

    if(this.urlLink){
      this.getMaterial(this.urlLink);
    }
  }

  save(event: Event) {
    event.preventDefault();

    this.materialService
      .saveMaterial(this.materialGroup.getRawValue())
      .pipe(
        catchError((err) => {
          this.matSnackBar.open(`${err}`, 'Ok', { duration: 5000 });
          return '';
        })
      )
      .subscribe((result) => {
        this.matSnackBar.open('Material salvo com sucesso!', '', {
          duration: 5000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['sucess-snackbar'],
        });
        this.materialGroup.reset();
      });
  }

  getMaterial(url: string){
    this.materialService.getMaterial(url).subscribe((material) => {
      this.materialGroup.patchValue(material);
    });
  }

  goBack() {
    this.router.navigate(['/home/material']);
  }
}
