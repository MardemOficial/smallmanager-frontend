export enum MovementTypeEnum {
  INCOMING,
  OUTGOING,
}

export const MOVEMENT_TYPE_LABELS: Record<MovementTypeEnum, string> = {
  [MovementTypeEnum.INCOMING]: 'Entrada',
  [MovementTypeEnum.OUTGOING]: 'Saída',
};
