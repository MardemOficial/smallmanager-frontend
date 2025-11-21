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
import { HttpErrorResponse } from '@angular/common/http';
import { PaginationListClass } from '../../../classes/pagination-list.class';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'sm-benefit-list.component',
  imports: [
    ReactiveFormsModule,
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
export class BenefitListComponent extends PaginationListClass{
  listBenefit: BenefitInterface[] = [];

  benefitForm = new FormControl<string | null>('');

  constructor(
    private benefitService: BenefitService,
    private snackBar: MatSnackBar,
    private paginationClass: PaginationClass
  ) {
    super();
    this.listBenefits();
  }

  listBenefits(){
   this.benefitService.benefitList().subscribe((benefit) => {
      next: {
          this.listBenefit = benefit.benefitList;
          this.pageCurrent = benefit.page;
          this.sizePage = benefit.limit;
      }
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.snackBar.open('Você não tem permissão de acesso!', 'Ok', { duration: 5000 });
        } else {
          this.snackBar.open('Erro ao carregar os usuários!', 'Ok', { duration: 5000 });
        }
      }
    });
  }

  findByName(event: Event){
    event.preventDefault();
  }
}
