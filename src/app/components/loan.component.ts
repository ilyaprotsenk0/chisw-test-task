import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: 'loan.component.html',
  styleUrls: ['loan.component.css'],
})
export class LoanComponent implements OnInit {
  @Input() id!: number;
  @Input() title!: string;

  ngOnInit(): void {}
}
