import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { PaginationClass } from '../../../classes/pagination.class';
import { ProductService } from '../product.service';
import { ProductInterface } from '../product.interface';

@Component({
  selector: 'sm-product-list.component',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {

  listProduct: ProductInterface[] = [
    { id: '1', name: 'Pizza de Calabresa' },
    { id: '2', name: 'Pizza de Chocolate' },
  ];

  searchProduct = new FormControl('');

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private paginationClass: PaginationClass
  ) {}
}
