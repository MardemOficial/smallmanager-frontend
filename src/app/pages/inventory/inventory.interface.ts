import { MovementSourceEnum } from '../../enums/movement-source.enum';
import { MovementTypeEnum } from '../../enums/movement-type.enum';
import { InventoryItemTypeEnum } from '../../enums/inventory-item-type.enum';

export interface InventoryInterface {
  id?: string;
  type: InventoryItemTypeEnum;
  movementType?: MovementTypeEnum;
  movementSource?: MovementSourceEnum;
  movementDate?: Date;
  entityId?: string;
  entityName?: string;
  quantity?: number;
  description?: string;
}
