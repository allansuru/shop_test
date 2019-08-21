export interface CreditCard {
  numberCard: number;
  name: string;
  validate: Date;
  cvv: number;
  Quota: Payment[];
}

export interface Payment {
  id: number;
  value: string;
}
