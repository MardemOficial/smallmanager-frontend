import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { CashflowTypeEnum, CASHFLOW_TYPE_LABELS } from '../../../enums/cashflow-type.enum';
import { CashflowInterface } from '../cashflow.interface';


@Component({
  selector: 'sm-cashflow-form.component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
  ],
  templateUrl: './cashflow-form.component.html',
  styleUrl: './cashflow-form.component.scss',
})
export class CashflowFormComponent {
  listCashflowTypeEnum: CashflowTypeEnum[] = [
    CashflowTypeEnum.OPENING_BALANCE,
    CashflowTypeEnum.CLOSING_BALANCE,
    CashflowTypeEnum.CASH_DROP,
  ];

  castFlowForm = new FormGroup({
    type: new FormControl<CashflowTypeEnum | null>(null, {validators: Validators.required}),
    amount: new FormControl<number | null>(null, {validators: Validators.min(0), nonNullable: true}),
    describe: new FormControl<string>(''),
  })

  cashFlowTypeEnum = Object.values(CashflowTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as CashflowTypeEnum[];
  cashFlowTypeLabels = CASHFLOW_TYPE_LABELS;

  constructor(private router: Router){}

   goBack() {
    this.router.navigate(['/home/cashflow']);
  }
}
