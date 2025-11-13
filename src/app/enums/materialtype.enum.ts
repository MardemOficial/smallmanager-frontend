export enum MaterialTypeEnum {
    INSUMO = 1,
    MATERIA_PRIMA = 2,
}

export const MATERIAL_TYPE_LABELS: Record<MaterialTypeEnum, string> = {
  [MaterialTypeEnum.INSUMO]: 'Insumo',
  [MaterialTypeEnum.MATERIA_PRIMA]: 'Matéria-prima',
};
