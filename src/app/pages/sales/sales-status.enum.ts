export enum SalesStatusEnum {
    CONFIRMED,
    PENDING,
    PROCESSING,
    READY,
    IN_TRANSIT,
    COMPLETED,
    CANCELLED,
}

export const SALES_STATUS_LABELS: Record<SalesStatusEnum,string> = {
    [SalesStatusEnum.CONFIRMED]: 'Confirmado',
    [SalesStatusEnum.PENDING]: 'Pendente',
    [SalesStatusEnum.PROCESSING]: 'Processando',
    [SalesStatusEnum.READY]: 'Pronto',
    [SalesStatusEnum.IN_TRANSIT]: 'Em transito',
    [SalesStatusEnum.COMPLETED]: 'Finalizado',
    [SalesStatusEnum.CANCELLED]: 'Cancelado',
}