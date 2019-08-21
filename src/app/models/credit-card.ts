export interface CreditCard {
  numberCard: number;
  name: string;
  validate: Date;
  cvv: number;
  Quota: Payment[];
}

export interface Payment {
  value: string;
}
