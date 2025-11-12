import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'sm-position-form',
  imports: [ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule,
    MatCardModule],
  templateUrl: './position-form.component.html',
  styleUrl: './position-form.component.scss',
})
export class PositionFormComponent {

    constructor(private router: Router){}

  goBack(){
    this.router.navigate(['/home/position']);
  }
}
