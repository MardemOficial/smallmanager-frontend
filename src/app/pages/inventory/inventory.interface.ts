import { MovementSourceEnum } from '../../enums/movement-source.enum';
import { MovementTypeEnum } from '../../enums/movement-type.enum';

export interface InventoryInterface {
  id?: string;
  movementType?: MovementTypeEnum;
  movementSource?: MovementSourceEnum;
  movementDate?: Date;
  entityId?: string;
  entityName?: string;
  quantity?: number;
  description?: string;
}
