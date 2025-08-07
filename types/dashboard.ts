export interface Transaction {
  id: string;
  date: string; // YYYY-MM-DD
  remark: string;
  amount: number; // Positive = Credit, Negative = Debit
  currency: string; // Hardcoded to "USD"
  type: 'Credit' | 'Debit'; // Derived from `amount`
}

export interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number; // Percentage
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export type SortDirection = 'asc' | 'desc';
export type SortField = 'date' | 'remark' | 'amount' | 'currency' | 'type';
