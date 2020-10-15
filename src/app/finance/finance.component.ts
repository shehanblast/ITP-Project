import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  myimage : String ="assets/images/finance-charts-d-illustration-financial-diagram-pie-chart-sheets-report-32147993.jpg"
  constructor(private router : Router) { }

  ngOnInit() {
  }

  handleImcomes(){
    this.router.navigate(['incomesDetails'])
  }
  handleExpenses(){
    this.router.navigate(['expensesDetails'])

  }

}
