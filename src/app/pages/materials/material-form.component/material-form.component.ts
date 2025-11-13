import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MaterialTypeEnum, MATERIAL_TYPE_LABELS } from '../../../enums/materialtype.enum';
import { MaterialService } from '../material.service';
import { MaterialsInterface } from '../materials.interface';

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

  listMaterial: MaterialsInterface[] = [
    {id: "1", name: "CALABRESA", typeMaterial: MaterialTypeEnum.MATERIA_PRIMA},
    {id: "2", name: "BACON", typeMaterial: MaterialTypeEnum.MATERIA_PRIMA}
  ];

  materialGroup = new FormGroup({
    sku: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    typeMaterial: new FormControl<MaterialTypeEnum | null>(null),
    description: new FormControl(''),
    unitaryValue: new FormControl('', Validators.required),
  });

    materialTypes = Object.values(MaterialTypeEnum).filter(
      (v) => typeof v === 'number'
    ) as MaterialTypeEnum[];
    materialTypeLabels = MATERIAL_TYPE_LABELS;

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home/material']);
  }
}
