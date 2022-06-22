import { Injectable } from '@angular/core';
import { LoanData } from './models/loan-data';
import { ProcessedLoanData } from './models/processed-loan-data';

@Injectable()
export class LoandsDataService {
  private loansData: LoanData[] = [
    {
      id: 1,
      title: 'Voluptate et sed tempora qui quisquam.',
      tranche: 'A',
      available: '11,959',
      annualised_return: 8.6,
      term_remaining: 864000,
      ltv: 48.8,
      amount: '85,754',
    },
    {
      id: 5,
      title: 'Consectetur ipsam qui magnam minus dolore ut fugit.',
      tranche: 'B',
      available: '31,405',
      annualised_return: 7.1,
      term_remaining: 1620000,
      ltv: 48.8,
      amount: '85,754',
    },
    {
      id: 12,
      title:
        'Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.',
      tranche: 'C',
      available: '12,359',
      annualised_return: 4.8,
      term_remaining: 879000,
      ltv: 48.8,
      amount: '85,754',
    },
  ];

  private processedLoansData!: ProcessedLoanData[];

  private processLoansData(arr: LoanData[]): ProcessedLoanData[] {
    return arr.map((singleLoanData: LoanData) => {
      return {
        id: singleLoanData.id,
        title: singleLoanData.title,
        available: singleLoanData.available,
        amount: singleLoanData.amount,
        term_remaining: singleLoanData.term_remaining,
        isInvested: false,
      };
    });
  }

  getLoansData(): ProcessedLoanData[] {
    this.processedLoansData = this.processLoansData(this.loansData);
    return this.processedLoansData;
  }

  getLoanDataById(id: number): ProcessedLoanData | undefined {
    return this.getLoansData().find((item: ProcessedLoanData) => {
      return item.id === id;
    });
  }

  getTotalAvailableAmount(): string {
    const temp = this.processedLoansData.map((loanData) => {
      return loanData.available.split(',');
    });

    let beforeComa = 0;
    let afterComa = 0;

    for (let i = 0; i < temp.length; i++) {
      let beforeComaTemp = Number(temp[i][0]);
      let afterComaTemp = Number(temp[i][1]);

      beforeComa += beforeComaTemp;
      afterComa += afterComaTemp;

      if (afterComa > 1000) {
        beforeComa += 1;
        afterComa = afterComa % 1000;
      }
    }

    console.log([beforeComa, afterComa].join(','));
    return [beforeComa, afterComa].join(',');
  }
}
