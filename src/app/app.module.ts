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
import { ListDrugsComponent } from './list-drugs/list-drugs.component';
import { SupplierComponent } from './supplier/supplier.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { InsertMedicalComponent } from './insert-medical/insert-medical.component';
import { InsertMedicalLtComponent } from './insert-medical-lt/insert-medical-lt.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { ViewMedicalComponent } from './view-medical/view-medical.component';
import { ViewAllmedicalComponent } from './view-allmedical/view-allmedical.component';
import { SearchPatientsComponent } from './search-patients/search-patients.component';
import { RegisterPatientsComponent } from './register-patients/register-patients.component';
import { PatientHeaderComponent } from './patient-header/patient-header.component';
import { MedicalReportComponent } from './medical-report/medical-report.component';
import { DoctorsComponent } from './doctors/doctors.component';



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
    OrderStockComponent,
    ListDrugsComponent,
    SupplierComponent,
    Dashboard2Component,
    HomeComponent,
    InsertMedicalComponent,
    InsertMedicalLtComponent,
    MedicalReportComponent,
    PatientHeaderComponent,
    RegisterPatientsComponent,
    SearchPatientsComponent,
    ViewAllmedicalComponent,
    ViewMedicalComponent,
    ViewPatientComponent,
    ViewPatientsComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
