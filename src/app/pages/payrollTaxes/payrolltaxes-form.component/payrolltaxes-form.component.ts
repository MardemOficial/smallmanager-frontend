import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'sm-payrolltaxes-form.component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './payrolltaxes-form.component.html',
  styleUrl: './payrolltaxes-form.component.scss',
})
export class PayrolltaxesFormComponent {
  payrollTaxesGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home/payrolltaxe']);
  }
}
