import { MovementTypeEnum } from './movement-type.enum';

export enum MovementSourceEnum {
  PURCHASE,
  SALE,
  CUSTOMER_RETURN,
  VENDOR_RETURN,
  INVENTORY_AJUSTMENT_IN,
  INVENTORY_AJUSTMENT_OUT,
}

export const MOVEMENT_SOURCE_LABELS: Record<MovementSourceEnum, string> = {
  [MovementSourceEnum.PURCHASE]: 'Compra',
  [MovementSourceEnum.SALE]: 'Venda',
  [MovementSourceEnum.CUSTOMER_RETURN]: 'Devolução de Cliente',
  [MovementSourceEnum.VENDOR_RETURN]: 'Devolução para Fornecedor',
  [MovementSourceEnum.INVENTORY_AJUSTMENT_IN]: 'Ajuste de Estoque (Entrada)',
  [MovementSourceEnum.INVENTORY_AJUSTMENT_OUT]: 'Ajuste de Estoque (Saída)',
};

export const SourceToMovementType: Record<MovementSourceEnum, MovementTypeEnum> = {
  [MovementSourceEnum.PURCHASE]: MovementTypeEnum.INCOMING,
  [MovementSourceEnum.SALE]: MovementTypeEnum.OUTGOING,
  [MovementSourceEnum.CUSTOMER_RETURN]: MovementTypeEnum.INCOMING,
  [MovementSourceEnum.VENDOR_RETURN]: MovementTypeEnum.OUTGOING,
  [MovementSourceEnum.INVENTORY_AJUSTMENT_IN]: MovementTypeEnum.INCOMING,
  [MovementSourceEnum.INVENTORY_AJUSTMENT_OUT]: MovementTypeEnum.OUTGOING,
};

export const MovementTypeToSource: Record<MovementTypeEnum, MovementSourceEnum[]> = {
  [MovementTypeEnum.INCOMING]: [],
  [MovementTypeEnum.OUTGOING]: [],
};

Object.entries(SourceToMovementType).forEach(([source, type]) => {
  MovementTypeToSource[type].push(source as unknown as MovementSourceEnum);
});
