import { Component, Input, OnInit } from '@angular/core';
import { LoandsDataService } from 'src/app/loands-data.service';

@Component({
  selector: 'app-loan',
  templateUrl: 'loan.component.html',
  styleUrls: ['loan.component.css'],
})
export class LoanComponent implements OnInit {
  @Input() id!: number;
  @Input() title!: string;
  @Input() isInvested!: boolean;

  constructor(private loandsDataService: LoandsDataService) {}
  ngOnInit(): void {}

  setSelectedLoanId(id: number) {
    this.loandsDataService.selectedId = id;
  }
}
