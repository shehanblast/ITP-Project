import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FoooterComponent } from './foooter/foooter.component';
import { LogoutComponent } from './logout/logout.component';
import {HttpClientModule} from "@angular/common/http";
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { EmployeeComponent } from './employee/employee.component';
import { FinanceComponent } from './finance/finance.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { DrugIssueComponent } from './drug-issue/drug-issue.component';
import { OrderStockComponent } from './order-stock/order-stock.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FoooterComponent,
    LogoutComponent,
    TodoComponent,
    DashboardComponent,
    HeaderComponent,
    NavComponent,
    DoctorComponent,
    PatientComponent,
    EmployeeComponent,
    FinanceComponent,
    SuppliersComponent,
    DrugIssueComponent,
    OrderStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
