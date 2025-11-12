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
import { PositionService } from '../position.service';
import { PositionInterface } from '../position.interface';

@Component({
  selector: 'sm-position-list',
  imports: [
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './position-list.component.html',
  styleUrl: './position-list.component.scss',
})
export class PositionListComponent {
  listPosition: PositionInterface[] = [
    { label: 'GERENTE', description: 'Comercial' },
    { label: 'ATENDENTE', description: 'SALÃO' },
  ];

  constructor(
    private positionService: PositionService,
    private snackBar: MatSnackBar,
    private paginationClass: PaginationClass
  ) {}
}
