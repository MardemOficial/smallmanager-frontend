export enum MaterialTypeEnum {
    SUPPLY,
    RAW_MATERIAL,
}

export const MATERIAL_TYPE_LABELS: Record<MaterialTypeEnum, string> = {
  [MaterialTypeEnum.SUPPLY]: 'Insumo',
  [MaterialTypeEnum.RAW_MATERIAL]: 'Matéria-prima',
};

export const MATERIAL_TYPES_STRING: Record<string, string> = {
  ['RAW_MATERIAL'] : 'Matéria-prima',
  ['SUPPLY']: 'Insumo' 
}