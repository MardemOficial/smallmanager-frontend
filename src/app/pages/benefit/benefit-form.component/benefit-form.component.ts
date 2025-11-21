import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BenefitInterface } from '../benefit.interface';
import { BenefitService } from '../benefit.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'sm-benefit-form.component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './benefit-form.component.html',
  styleUrl: './benefit-form.component.scss',
})
export class BenefitFormComponent {

  benefitGroup = new FormGroup({
    name: new FormControl<string>('', {validators: Validators.required, nonNullable: true }),
    description: new FormControl<string>('', {validators: Validators.required, nonNullable: true }),
    value: new FormControl<number>(0, {validators: Validators.min(1), nonNullable: true })
  });

  constructor(private router:Router, private matSnackBar: MatSnackBar, private benefitService: BenefitService){}


  save(event: Event){
    event.preventDefault();
    this.benefitService.saveBenefit(this.benefitGroup.getRawValue())
  .pipe(
    catchError(err => {
       this.matSnackBar.open(`${err}`, "Ok", {duration: 5000});
       return "";
    })
  )
  .subscribe(result => {
      this.matSnackBar.open(`Benefício salvo!`, "Ok", {duration: 5000});
      this.benefitGroup.reset();
  });

  }

  goBack() {
    this.router.navigate(['/home/benefit']);
  }
}
