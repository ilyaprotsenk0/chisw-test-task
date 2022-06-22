import { Component, DoCheck, OnInit } from '@angular/core';
import { LoandsDataService } from 'src/app/loands-data.service';
import { ProcessedLoanData } from 'src/app/models/processed-loan-data';

@Component({
  selector: 'app-invest-form',
  templateUrl: 'invest-form.component.html',
  styleUrls: ['invest-form.component.css'],
})
export class InvestFormComponent implements OnInit, DoCheck {
  selectedLoanId!: number | null;
  loanData!: ProcessedLoanData;
  constructor(private loandsDataService: LoandsDataService) {}

  ngOnInit(): void {
    this.selectedLoanId = this.loandsDataService.selectedId;
    this.loanData = this.loandsDataService.getLoanDataById(this.selectedLoanId);
    console.log(this.loanData);
  }

  ngDoCheck(): void {
    this.selectedLoanId = this.loandsDataService.selectedId;
    this.loanData = this.loandsDataService.getLoanDataById(this.selectedLoanId);
    console.log(this.loanData);
  }

  hideInvestForm(value: null) {
    this.loandsDataService.selectedId = null;
  }
}
