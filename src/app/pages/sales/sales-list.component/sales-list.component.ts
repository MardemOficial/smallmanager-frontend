import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SalesService } from '../sales.service';
import { InStoreInterface } from '../in-store.interface';
import { DeliveryInterface } from '../delivery.interface';

@Component({
  selector: 'sm-sales-list.component',
  imports: [
    RouterModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.scss',
})
export class SalesListComponent {

  listInstore: InStoreInterface[] = [];
  listDelivery: DeliveryInterface[] = [];

  orderDeliver = new FormGroup({});
  orderInStory = new FormGroup({});

  constructor(private snLackBar: MatSnackBar, private salesService: SalesService){

  }

}
