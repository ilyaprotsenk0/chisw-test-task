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
    if (event.key === '+' || event.key === '-' || event.key === 'e') {
      return false;
    }
    return true;
  }

  preventPaste(event: ClipboardEvent) {
    return event.preventDefault();
  }

  investToLoan(investInputValue: string) {
    if (
      !investInputValue ||
      investInputValue === '0' ||
      Number(investInputValue) > this.loanData!.available
    ) {
      this.isAmountCorrect = false;
    } else {
      this.loandsDataService.investToLoan(this.loanData!.id, investInputValue);
      this.hideInvestForm();
    }
  }
}
