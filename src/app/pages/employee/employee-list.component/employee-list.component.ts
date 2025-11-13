import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { PaginationClass } from '../../../classes/pagination.class';
import { EmployeeService } from '../employee.service';
import { EmployeeInterface } from '../employee.interface';

@Component({
  selector: 'sm-employee-list.component',
  imports: [
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  
  listEmployee: EmployeeInterface[] = [
    { people: { name: 'João' }, position: { label: 'Gerente', description: 'Cuida de tudo' } },
    { people: { name: 'Maria' }, position: { label: 'Atendente', description: 'Atende tudo' } },
  ];

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private paginationClass: PaginationClass
  ) {}
}
