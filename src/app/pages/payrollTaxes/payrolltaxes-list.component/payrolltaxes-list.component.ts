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
import { PayrolltaxesService } from '../payrolltaxes.service';
import { PayrolltaxesInterface } from '../payrolltaxes.interface';

@Component({
  selector: 'sm-payrolltaxes-list.component',
  imports: [
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './payrolltaxes-list.component.html',
  styleUrl: './payrolltaxes-list.component.scss',
})
export class PayrolltaxesListComponent {
  payrolltaxesList: PayrolltaxesInterface[] = [
    { id: 1, name: 'INSS', value: 100, description: 'Previdência' },
    { id: 2, name: 'FGTS', value: 235.35, description: 'Fundo de garantia' },
  ];

  constructor(
    private payrolltaxesService: PayrolltaxesService,
    private snackBar: MatSnackBar,
    private paginationClass: PaginationClass
  ) {}
}
