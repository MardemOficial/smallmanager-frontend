import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormArray, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { BenefitInterface } from '../../benefit/benefit.interface';
import { PayrolltaxesInterface } from '../../payrollTaxes/payrolltaxes.interface';
import { TermInterface } from '../../../interfaces/term.interface';

@Component({
  selector: 'sm-employee-form.component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    NgxMaskDirective,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    DatePipe,
    MatDatepickerModule, 
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
  providers: [
    provideNgxMask(),
    provideNativeDateAdapter(),
    ],
})
export class EmployeeFormComponent {
  employeeGroup = new FormGroup({
    people: new FormGroup({
      name: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
    }),
    contact: new FormGroup({
      phone: new FormControl('', Validators.required),
      alternatePhone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    }),
    address: new FormGroup({
      zip: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      complement: new FormControl('', Validators.required),
      neighborhood: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    }),
    employeeContract: new FormGroup({
      contractType: new FormControl('', Validators.required),
      pis: new FormControl('', Validators.required),
      paymentPeople: new FormGroup({
        salary: new FormControl('', Validators.required),
        bank: new FormGroup({
          bankName: new FormControl('', Validators.required),
          agency: new FormControl('', Validators.required),
          accountNumber: new FormControl('', Validators.required),
          accountType: new FormControl('', Validators.required),
          accountHolderName: new FormControl('', Validators.required),
          taxIdNumber: new FormControl('', Validators.required),
        }),
        pix: new FormGroup({
          keyName: new FormControl('', Validators.required),
          keyValue: new FormControl('', Validators.required),
        }),
      }),
      term: new FormArray([])
    }),
    benefit: new FormArray([]),
    payrollTaxes: new FormArray([]),
    position: new FormGroup({
      lable: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    }),
  });

  listTypeContract = [
    { id: 1, label: 'CLT' },
    { id: 2, label: 'PJ' },
    { id: 3, label: 'TEMPORÁRIO' },
    { id: 4, label: 'ESTÁGIO' },
  ];

  listBenefitOptions: BenefitInterface[] = [
    { id: "1", name: 'Vale Transporte', description: 'Auxílio para transporte', value: 150.0 },
    { id: "2", name: 'Vale Refeição', description: 'Auxílio para alimentação', value: 300.0 },
    { id: "3", name: 'Plano de Saúde', description: 'Cobertura médica', value: 500.0 },
  ];

  listPayrollOptions: PayrolltaxesInterface[] = [
    { id: "1", name: 'INSS', description: 'Contribuição para a seguridade social', value: 11.0 },
    { id: "2", name: 'IRRF', description: 'Imposto de Renda Retido na Fonte', value: 27.5 },
    { id: "3", name: 'FGTS', description: 'Fundo de Garantia do Tempo de Serviço', value: 8.0 },
  ];

  listBenefitForContract = signal<BenefitInterface[]>([]);
  benefitSelected = new FormControl<BenefitInterface | null>(null);

  listPayrollForContract = signal<PayrolltaxesInterface[]>([]);
  payrollSelected = new FormControl<PayrolltaxesInterface | null>(null);

  listTermForContract = signal<TermInterface[]>([]);
  termOfContract = new FormGroup({
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
  });

  constructor(private router: Router, employeeService: EmployeeService) {}

  addBenefit(event?: Event) {
    event?.preventDefault();
    const item = this.benefitSelected.value;
    if (item && !this.listBenefitForContract().some((p) => p.id === item.id)) {
      this.listBenefitForContract.update((old: BenefitInterface[]): BenefitInterface[] => {
        if (!item) return old;
        return [...old, item];
      });
      this.benefitSelected.reset();
    }
  }

  excludeBenefit(event?: Event, benefit?: BenefitInterface) {
    event?.preventDefault();
    if (benefit) {
      this.listBenefitForContract.update((old) => old.filter((benef) => benef.id !== benefit.id));
    }
  }

  addPayroll(event?: Event) {
    event?.preventDefault();
    const item = this.payrollSelected.value;
    if (item && !this.listPayrollForContract().some((p) => p.id === item.id)) {
      this.listPayrollForContract.update(
        (old: PayrolltaxesInterface[]): PayrolltaxesInterface[] => {
          if (!item) return old;
          return [...old, item];
        }
      );
      this.payrollSelected.reset();
    }
  }

  excludePayroll(event?: Event, payroll?: PayrolltaxesInterface) {
    event?.preventDefault();
    if (payroll) {
      this.listPayrollForContract.update((old) => old.filter((perm) => perm.id !== payroll.id));
    }
  }

  addTerm(event?: Event) {
    event?.preventDefault();
    const item: TermInterface = this.termOfContract.value as TermInterface;
    if (item && !this.listTermForContract().some((p) => p.startDate === item.startDate && p.endDate === item.endDate)) {
      this.listTermForContract.update(
        (old: TermInterface[]): TermInterface[] => {
          if (!item) return old;
          return [...old, item];
        }
      );
      this.termOfContract.reset();
    }
  }

  excludeTerm(event?: Event, term?: TermInterface) {
    event?.preventDefault();
    if (term) {
      this.listTermForContract.update((old) => old.filter((ter) => ter.id !== term.id));
    }
  }

  goBack() {
    this.router.navigate(['/home/employee']);
  }
}
