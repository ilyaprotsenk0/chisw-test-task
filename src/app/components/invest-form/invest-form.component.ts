import { ParsedEventType } from '@angular/compiler';
import { Component, DoCheck, OnInit } from '@angular/core';
import { LoandsDataService } from 'src/app/loands-data.service';
import { LoanData } from 'src/app/models/loan-data';

@Component({
  selector: 'app-invest-form',
  templateUrl: 'invest-form.component.html',
  styleUrls: ['invest-form.component.css'],
})
export class InvestFormComponent implements OnInit, DoCheck {
  selectedLoanId!: number | null;
  loanData!: LoanData | null;
  isAmountCorrect = true;

  constructor(private loandsDataService: LoandsDataService) {}

  ngOnInit(): void {
    this.selectedLoanId = this.loandsDataService.selectedId;
    this.loanData = this.loandsDataService.getLoanDataById(this.selectedLoanId);
  }

  ngDoCheck(): void {
    this.selectedLoanId = this.loandsDataService.selectedId;
    this.loanData = this.loandsDataService.getLoanDataById(this.selectedLoanId);
  }

  hideInvestForm() {
    this.loandsDataService.selectedId = null;
    this.isAmountCorrect = true;
  }

  preventTypingArithmeticOperations(event: KeyboardEvent) {
    if (
      event.key === '+' ||
      event.key === '-' ||
      event.key === '.' ||
      event.key === 'e'
    ) {
      return false;
    }
    return true;
  }

  preventPaste(event: ClipboardEvent) {
    return event.preventDefault();
  }

  // recalculateLoan(id: number, amountValue: string): void {
  //   const available = Number(this.loanData!.available.replace(',', ''));
  //   const result = available - Number(amountValue);

  //   if (result >= 0) {
  //     let temp = result / 1000;
  //     if (temp >= 1) {
  //       this.loandsDataService.changeAvailableByLoanId(
  //         id,
  //         String(temp).replace('.', ',')
  //       );
  //     } else {
  //       this.loandsDataService.changeAvailableByLoanId(id, String(result));
  //     }

  //     this.hideInvestForm();
  //   }

  //   this.isAmountCorrect = false;
  // }
}
