import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {ListTodosComponent} from './list-todos/list-todos.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {TodoComponent} from './todo/todo.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DoctorComponent} from './doctor/doctor.component';
import {EmployeeComponent} from './employee/employee.component';
import {FinanceComponent} from './finance/finance.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {DrugIssueComponent} from './drug-issue/drug-issue.component';
import {OrderStockComponent} from './order-stock/order-stock.component';
import {PatientComponent} from './patient/patient.component';


const routes: Routes = [
  { path: '', component: LoginComponent  },//default path
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashboardComponent, canActivate:[RouteGuardService] },
 // { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path: 'todo/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  { path: 'doc', component: DoctorComponent, canActivate:[RouteGuardService]},
  { path: 'emp', component: EmployeeComponent, canActivate:[RouteGuardService]},
  { path: 'fin', component: FinanceComponent, canActivate:[RouteGuardService]},
  { path: 'sup', component: SuppliersComponent, canActivate:[RouteGuardService]},
  { path: 'issue', component: DrugIssueComponent, canActivate:[RouteGuardService]},
  { path: 'order', component: OrderStockComponent, canActivate:[RouteGuardService]},
  { path: 'patient', component: PatientComponent, canActivate:[RouteGuardService]},


  { path: '**', component: ErrorComponent }//anything else
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
