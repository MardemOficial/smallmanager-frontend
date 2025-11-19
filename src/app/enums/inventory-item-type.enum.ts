export enum InventoryItemTypeEnum {
    PRODUCT,
    RAWMATERIAL,
    COMSUMABLE
}

export const INVENTORY_ITEM_TYPE_LABEL: Record<InventoryItemTypeEnum, string> = {
  [InventoryItemTypeEnum.PRODUCT]: 'Produto',
  [InventoryItemTypeEnum.RAWMATERIAL]: 'Matéria-prima',
  [InventoryItemTypeEnum.COMSUMABLE]: 'Insumo',
};
