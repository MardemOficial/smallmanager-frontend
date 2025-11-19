import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginationClass } from '../../../classes/pagination.class';
import { PaginationListClass } from '../../../classes/pagination-list.class';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CashflowTypeEnum, CASHFLOW_TYPE_LABELS } from '../../../enums/cashflow-type.enum';
import { CashflowInterface } from '../cashflow.interface';

@Component({
  selector: 'sm-cashflow-list.component',
  imports: [
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    NgxMaskDirective,
  ],
  templateUrl: './cashflow-list.component.html',
  styleUrl: './cashflow-list.component.scss',
  providers: [provideNgxMask(), provideNativeDateAdapter()],
})
export class CashflowListComponent extends PaginationListClass {
  listCashFlow: CashflowInterface[] = [];
  cashFlowForm = new FormGroup({
    date: new FormControl<Date | null>(null),
    type: new FormControl<CashflowTypeEnum | null>(null),
  });

  cashFlowTypeEnum = Object.values(CashflowTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as CashflowTypeEnum[];
  cashFlowTypeLabels = CASHFLOW_TYPE_LABELS;
}
