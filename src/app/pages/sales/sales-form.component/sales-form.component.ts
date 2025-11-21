import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SalesItemInterface } from '../sales-item.interface';
import { PaymentTypeEnum, PAYMENT_TYPE_LABEL } from '../../../enums/payment-type.enum';
import { SALES_STATUS_LABELS, SalesStatusEnum } from '../sales-status.enum';
import { SalesService } from '../sales.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'sm-sales-form.component',
  imports: [
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sales-form.component.html',
  styleUrl: './sales-form.component.scss',
})
export class SalesFormComponent {
  paymentType = Object.values(PaymentTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as PaymentTypeEnum[];
  paymentTypesLabels = PAYMENT_TYPE_LABEL;

  salesStatus = Object.values(SalesStatusEnum).filter(
    (v) => typeof v === 'number'
  ) as SalesStatusEnum[];
  salesStatusInStore: SalesStatusEnum[] = [
    SalesStatusEnum.CONFIRMED,
    SalesStatusEnum.PENDING,
    SalesStatusEnum.PROCESSING,
    SalesStatusEnum.READY,
    SalesStatusEnum.COMPLETED,
    SalesStatusEnum.CANCELLED,
  ];
  salesStatusLabels = SALES_STATUS_LABELS;

  listSalesItemInStore = signal<SalesItemInterface[]>([]);
  listSalesItemDelivery = signal<SalesItemInterface[]>([]);

  orderInStoryForm = new FormGroup({});
  orderDeliverForm = new FormGroup({});

  constructor(private router: Router, private salesService: SalesService) {
    this.listDelivery();
    this.listInStore();
  }

  listDelivery(){
    this.salesService.salesDeliveryList().subscribe((delivery) => {

    });
  }

  listInStore(){

  }

  addItemInStore(event?: Event) {
    event?.preventDefault();

    const item = this.orderInStoryForm.value as SalesItemInterface;

    if (!item || !item.id) return;

    if (item && !this.listSalesItemInStore().some((p) => p.id === item.id)) {
      this.listSalesItemInStore.update((old: SalesItemInterface[]): SalesItemInterface[] => {
        if (!item) return old;
        return [...old, item as SalesItemInterface];
      });

      this.orderInStoryForm.reset();
    }
  }

  addDelivery(event?: Event) {
    event?.preventDefault();

    const item = this.orderDeliverForm.value as SalesItemInterface;

    if (!item || !item.id) return;

    if (item && !this.listSalesItemDelivery().some((p) => p.id === item.id)) {
      this.listSalesItemDelivery.update((old: SalesItemInterface[]): SalesItemInterface[] => {
        if (!item) return old;
        return [...old, item as SalesItemInterface];
      });

      this.orderDeliverForm.reset();
    }
  }

  excludeInStore(event?: Event, salesItem?: SalesItemInterface) {
    event?.preventDefault();

    if (!salesItem?.id) return;

    if (salesItem) {
      this.listSalesItemInStore.update((old) => old.filter((comp) => comp.id !== salesItem.id));
    }
  }

  excludeDelivery(event?: Event, salesItem?: SalesItemInterface) {
    event?.preventDefault();

    if (!salesItem?.id) return;

    if (salesItem) {
      this.listSalesItemDelivery.update((old) => old.filter((comp) => comp.id !== salesItem.id));
    }
  }

  goBack() {
    this.router.navigate(['/home/sales']);
  }
}
