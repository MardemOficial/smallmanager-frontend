export enum UnitOfMeansureTypeEnum {
    KILOGRAM,
    GRAM,
    TON,
    LITER,
    MILLILITER,
    GALLON,
    UNIT,
    PIECES,
    METER,
    BOX,
}

export const UNIT_ON_MEANSURE_TYPE_LABELS: Record<UnitOfMeansureTypeEnum, string> = {

    [UnitOfMeansureTypeEnum.KILOGRAM]: 'kg',
    [UnitOfMeansureTypeEnum.GRAM]: 'g',
    [UnitOfMeansureTypeEnum.TON]: 't',
    [UnitOfMeansureTypeEnum.LITER]: 'l',
    [UnitOfMeansureTypeEnum.MILLILITER]: 'ml',
    [UnitOfMeansureTypeEnum.GALLON]: 'g',
    [UnitOfMeansureTypeEnum.UNIT]: 'und',
    [UnitOfMeansureTypeEnum.PIECES]: 'pc',
    [UnitOfMeansureTypeEnum.METER]: 'mt',
    [UnitOfMeansureTypeEnum.BOX]: 'cx',
}