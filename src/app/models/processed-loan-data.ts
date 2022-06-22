export interface ProcessedLoanData {
  id: number;
  title: string;
  available: string;
  amount: string;
  term_remaining: number;
  isInvested?: boolean;
}
