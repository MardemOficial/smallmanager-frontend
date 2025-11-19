import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginationListClass } from '../../../classes/pagination-list.class';
import { InventoryService } from '../inventory.service';
import { InventoryInterface } from '../inventory.interface';
import { MovementTypeEnum, MOVEMENT_TYPE_LABELS } from '../../../enums/movement-type.enum';
import { MovementSourceEnum, MOVEMENT_SOURCE_LABELS } from '../../../enums/movement-source.enum';
import {
  InventoryItemTypeEnum,
  INVENTORY_ITEM_TYPE_LABEL,
} from '../../../enums/inventory-item-type.enum';

@Component({
  selector: 'sm-inventory-balance.component',
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './inventory-balance.component.html',
  styleUrl: './inventory-balance.component.scss',
})
export class InventoryBalanceComponent extends PaginationListClass {
  listInventory: InventoryInterface[] = [];

  inventoryForm = new FormGroup({
    entityName: new FormControl<string>(''),
    movementType: new FormControl<MovementTypeEnum | null>(null),
    movementSource: new FormControl<MovementSourceEnum | null>(null),
    type: new FormControl<InventoryItemTypeEnum | null>(null),
  });

  movenentType = Object.values(MovementTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as MovementTypeEnum[];
  movementTypesLabels = MOVEMENT_TYPE_LABELS;

  movenentSource = Object.values(MovementSourceEnum).filter(
    (v) => typeof v === 'number'
  ) as MovementSourceEnum[];
  movementSourceLabels = MOVEMENT_SOURCE_LABELS;

  inventoryItemTypeEnum = Object.values(InventoryItemTypeEnum).filter(
    (v) => typeof v === 'number'
  ) as InventoryItemTypeEnum[];
  inventoryItemTypeLabels = INVENTORY_ITEM_TYPE_LABEL;

  
}