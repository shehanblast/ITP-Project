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
import {ListDrugsComponent} from './list-drugs/list-drugs.component';
import {SupplierComponent} from './supplier/supplier.component';
import {Dashboard2Component} from './dashboard2/dashboard2.component';
import { SearchPatientsComponent } from './search-patients/search-patients.component';
import { RegisterPatientsComponent } from './register-patients/register-patients.component';
import { InsertMedicalComponent } from './insert-medical/insert-medical.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { ViewMedicalComponent } from './view-medical/view-medical.component';
import { MedicalReportComponent } from './medical-report/medical-report.component';
import { ViewAllmedicalComponent } from './view-allmedical/view-allmedical.component';
import { InsertMedicalLtComponent } from './insert-medical-lt/insert-medical-lt.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderssComponent } from './orderss/orderss.component';


const routes: Routes = [
  { path: '', component: LoginComponent  },//default path
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashboardComponent, canActivate:[RouteGuardService] },
 // { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path: 'todo/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  { path: 'doc', component: DoctorsComponent, canActivate:[RouteGuardService]},
  { path: 'doctor/:id', component: DoctorComponent, canActivate:[RouteGuardService]},
  { path: 'emp', component: EmployeeComponent, canActivate:[RouteGuardService]},
  { path: 'fin', component: FinanceComponent, canActivate:[RouteGuardService]},
  { path: 'suppliers', component: SuppliersComponent, canActivate:[RouteGuardService]},
  { path: 'drugs', component: DrugIssueComponent, canActivate:[RouteGuardService]},
  
  { path: 'order', component: OrdersComponent, canActivate:[RouteGuardService]},
  { path: 'orders/:id', component: OrderssComponent, canActivate:[RouteGuardService]},
  { path: 'orderss',component:OrdersComponent, canActivate:[RouteGuardService]},
  
  { path: 'patient', component: PatientComponent, canActivate:[RouteGuardService]},
  { path: 'supplier/:id', component: SupplierComponent, canActivate:[RouteGuardService]},
  { path: 'drug/:id', component: ListDrugsComponent, canActivate:[RouteGuardService]},
  { path: 'dash2', component: Dashboard2Component, canActivate:[RouteGuardService] },

  {path: 'searchPatients', component: SearchPatientsComponent},
  {path: 'view-Patient-Details', component: SearchPatientsComponent},
  {path: 'insertPatient', component: RegisterPatientsComponent},
  {path: 'viewPatients', component: ViewPatientsComponent},
  {path: 'insertMedic', component: InsertMedicalComponent},
  {path: 'search-patients/:patientName', component: ViewPatientComponent},
  {path: 'view-patients', component: ViewPatientsComponent},
  {path: 'register-patients', component: RegisterPatientsComponent},
  {path: 'register-patients/:patientID', component: RegisterPatientsComponent},
  {path: 'insert-medical/:patientID/:stID', component: InsertMedicalComponent},
  {path: 'insert-medicallt/:patientID/:ltID', component:InsertMedicalLtComponent},
  {path: 'view-medical/:patientID', component: ViewMedicalComponent},
  {path: 'view-medical', component: ViewMedicalComponent},
  {path: 'viewAllMedical', component: ViewAllmedicalComponent},
  {path: 'medical-report/:patientID', component: MedicalReportComponent},



  

  { path: '**', component: ErrorComponent }//anything else
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
