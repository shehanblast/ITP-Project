import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeDataService } from '../income-data.service';
import { Income } from '../incomes-details/incomes-details.component';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-income-report',
  templateUrl: './income-report.component.html',
  styleUrls: ['./income-report.component.css']
})
export class IncomeReportComponent implements OnInit {
  incomes :Income[]

  constructor(private incomeService:IncomeDataService,
              private router: Router) { }

  ngOnInit(): void {

    this. refreshExpenses()

  }

  refreshExpenses(){
    this.incomeService.retrieveAllIncomes('admin').subscribe(
      response => {
        console.log(response);
        this.incomes = response;
      }
    )
  }

  generateReport(){

    const options = {
      filename : 'Expense_report.pdf',
      image : {type : 'jpg'},
      html2canvas : {},
      jsPDF : {orientation : 'portrait'}

    }
    
    const content : Element = document.getElementById('Expense-report-download');
    
    html2pdf()
    .from(content)
    .set(options)
    .save()
  }

}
