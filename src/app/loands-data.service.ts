import { Injectable } from '@angular/core';
import { LoanData } from './models/loan-data';

@Injectable()
export class LoandsDataService {
  selectedId!: number | null;
  private currentLoans: Array<any> = require('./current-loans.json').loans;
  private loansData: Array<LoanData> = this.currentLoans.map((item) => {
    return {
      id: Number(item.id),
      title: item.title,
      available: this.parseAvailableToNumber(item.available),
      term_remaining: Number(item.term_remaining),
      isInvested: false,
    };
  });

  private parseAvailableToNumber(available: string): number {
    return Number(available.replace(',', '.'));
  }

  getLoansData(): Array<LoanData> {
    return this.loansData;
  }

  getLoanDataById(id: number | null): LoanData | null {
    let result = null;

    for (let item of this.loansData) {
      if (item.id === id) {
        result = item;
      }
    }

    return result;
  }

  getTotalAvailableAmount(): number {
    return Number(
      this.loansData
        .map((item) => {
          return item.available;
        })
        .reduce((accumulator, current) => {
          return accumulator + current;
        })
        .toFixed(3)
    );
  }

  investToLoan(id: number, amount: string) {
    for (let item of this.loansData) {
      if (item.id === id) {
        item.available = Number((item.available - Number(amount)).toFixed(3));
        item.isInvested = true;
      }
    }
  }
}
