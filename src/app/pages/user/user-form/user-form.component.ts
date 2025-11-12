import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { EmployeeInterface } from '../../../interfaces/employee.interface';


@Component({
  selector: 'sm-user-form',
  imports: [ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule,
    MatCardModule
    ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserFormComponent {

  employeeList: EmployeeInterface[] = [
    {name: "Mardem", position:"Engenheiro de software"},
    {name: "Maria Clara", position:"Engenheira de Produção"}
  ]

  constructor(private router: Router){}

  goBack(){
    this.router.navigate(['/home/user']);
  }
}
