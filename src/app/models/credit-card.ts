export interface CreditCard {
  numCard?: any;
  name?: string;
  validate?: string;
  cvv?: number;
  Quota?: Payment[];
}

export interface Payment {
  id: number;
  value: string;
}
