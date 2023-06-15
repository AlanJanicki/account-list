export type Account = {
  accountType: string;
  currency: string;
  default: boolean;
  funds: number;
  id: number;
  isDemo: boolean;
  name: string;
  profitLoss: number;
};

export type AccountType = {
  id: string;
  title: string;
};
