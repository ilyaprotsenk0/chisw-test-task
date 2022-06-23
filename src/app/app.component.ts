import { Component, DoCheck, OnInit } from '@angular/core';
import { LoandsDataService } from './loands-data.service';
import { LoanData } from './models/loan-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoandsDataService],
})
export class AppComponent implements OnInit, DoCheck {
  loansData!: LoanData[];
  totalAvailableAmount!: number;
  selectedLoan: number | null = null;

  constructor(private loansDataService: LoandsDataService) {}

  ngOnInit() {
    this.loansData = this.loansDataService.getLoansData();
    this.totalAvailableAmount = this.loansDataService.getTotalAvailableAmount();
  }

  ngDoCheck(): void {
    this.selectedLoan = this.loansDataService.selectedId;
    this.loansData = this.loansDataService.getLoansData();
    this.totalAvailableAmount = this.loansDataService.getTotalAvailableAmount();
  }
}
