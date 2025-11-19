import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PaginationListClass } from '../../../classes/pagination-list.class';
import { MovementTypeEnum, MOVEMENT_TYPE_LABELS } from '../../../enums/movement-type.enum';
import { MovementSourceEnum, MOVEMENT_SOURCE_LABELS } from '../../../enums/movement-source.enum';
import { InventoryItemTypeEnum, INVENTORY_ITEM_TYPE_LABEL } from '../../../enums/inventory-item-type.enum';
import { InventoryService } from '../inventory.service';
import { InventoryInterface } from '../inventory.interface';

@Component({
  selector: 'sm-inventory-form.component',
  imports: [
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './inventory-form.component.html',
  styleUrl: './inventory-form.component.scss',
})
export class InventoryFormComponent extends PaginationListClass {
  
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

  listInventory = signal<InventoryInterface[]>([]);
  inventoryForm = new FormGroup({
    movementType: new FormControl<MovementTypeEnum | null>(null),
    movementSource: new FormControl<MovementSourceEnum | null>(null),
    type: new FormControl<InventoryItemTypeEnum | null>(null),
    entityId: new FormControl<string>(''),
    entityName: new FormControl<string>(''),
    quantity: new FormControl<number>(0),
    description: new FormControl<string>(''),
  });

  constructor(
    private router: Router,
    private inventoryService: InventoryService,
  ) {
    super();
  }

   addInventory(event?: Event) {
      event?.preventDefault();
  
      const item = this.inventoryForm.value;
  
      if (!item || !item.entityId) return;
  
      if ( item &&!this.listInventory().some((p) => p.entityId === item.entityId)) {

        this.listInventory.update(
          (old: InventoryInterface[]): InventoryInterface[] => {
            if (!item) return old;
            return [...old, item as InventoryInterface];
          }
        );
  
        this.inventoryForm.reset();
      }
    }
  
    excludeInventory(event?: Event, inventory?: InventoryInterface) {
      event?.preventDefault();
  
      if (!inventory?.entityId) return;
  
      if (inventory) {
        this.listInventory.update((old) =>
          old.filter((comp) => comp.entityId !== inventory.entityId)
        );
      }
    }

  goBack() {
    this.router.navigate(['/home/inventory']);
  }
}
