import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { BenefitInterface } from '../benefit.interface';
import { PaginationClass } from '../../../classes/pagination.class';
import { BenefitService } from '../benefit.service';

@Component({
  selector: 'sm-benefit-list.component',
  imports: [
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './benefit-list.component.html',
  styleUrl: './benefit-list.component.scss',
})
export class BenefitListComponent {
  listBenefit: BenefitInterface[] = [
    { id: 1, name: 'VALE ALIMENTAÇÃO', value: 500.53, description: 'Alimentação diárias' },
    { id: 2, name: 'VALE TRANSPORTE', value: 150.33, description: 'Transporte diário' },
  ];

  constructor(
    private benefitService: BenefitService,
    private snackBar: MatSnackBar,
    private paginationClass: PaginationClass
  ) {}
}
