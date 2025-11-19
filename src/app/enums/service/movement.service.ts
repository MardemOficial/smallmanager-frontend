import { Injectable } from '@angular/core';
import { MovementTypeEnum } from '../movement-type.enum';
import {
  MovementSourceEnum,
  SourceToMovementType,
  MovementTypeToSource,
} from '../movement-source.enum';

@Injectable({
  providedIn: 'root',
})
export class MovementService {
  getMovementType(origen: MovementSourceEnum): MovementTypeEnum {
    return SourceToMovementType[origen];
  }

  getSourceMotivent(type: MovementTypeEnum): MovementSourceEnum[] {
    return MovementTypeToSource[type];
  }
}
