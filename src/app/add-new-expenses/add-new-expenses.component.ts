import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseDataService } from '../expense-data.service';
import { Expense } from '../expenses-details/expenses-details.component';

@Component({
  selector: 'app-add-new-expenses',
  templateUrl: './add-new-expenses.component.html',
  styleUrls: ['./add-new-expenses.component.css']
})
export class AddNewExpensesComponent implements OnInit {

  id:number
  expense:Expense

  constructor(private expenseService:ExpenseDataService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.expense=new Expense(this.id, new Date(),0,'','')

    if(this.id!=-1){
      this.expenseService.retrieveExpense('admin',this.id).subscribe(
        data=>this.expense=data
      )
    }

  }

  saveExpense(){
    if(this.id==-1) {
      this.expenseService.createExpense('admin',this.expense)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['expensesDetails'])
          }
        )

    }
    else {
      this.expenseService.updateExpense('admin',this.id,this.expense)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['expensesDetails'])
          }
        )
    }

  }

}
