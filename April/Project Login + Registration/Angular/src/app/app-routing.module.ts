import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { SuccessComponent } from './success/success.component';
import { LoginComponent } from './login/login.component';
import { FailComponent } from './fail/fail.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'success', component:SuccessComponent},
  {path:'login', component:LoginComponent},
  {path:'fail', component:FailComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'allemployee', component:AllEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
