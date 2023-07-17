/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 16 July 2023
 * Description:  Loan App
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loanAmount: number;
  interestRate: number;
  numberOfYears: number;
  monthlyPayment: number;
  totalInterest: number;

  constructor() { }

  calculateLoan(): void {
    const ratePerPeriod = this.interestRate / 100 / 12;
    const numberOfPayments = this.numberOfYears * 12;

    this.monthlyPayment =
      (this.loanAmount * ratePerPeriod * Math.pow(1 + ratePerPeriod, numberOfPayments)) /
      (Math.pow(1 + ratePerPeriod, numberOfPayments) - 1);

    this.totalInterest = this.monthlyPayment * numberOfPayments - this.loanAmount;
  }

  ngOnInit(): void {
  }
}
