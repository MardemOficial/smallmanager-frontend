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
import { PaginationListClass } from '../../../classes/pagination-list.class';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'sm-inventory-list.component',
  imports: [
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
  ],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss',
})
export class InventoryListComponent extends PaginationListClass {
  listInventory: any[] = [];

  constructor(
    private inventoryService: InventoryService,
    private snLackBar: MatSnackBar,
    private paginationClass: PaginationClass
  ) {
    super();
  }
}
