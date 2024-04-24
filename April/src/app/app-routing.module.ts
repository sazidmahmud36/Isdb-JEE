import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "registration", component:RegistrationComponent},
  {path: "success", component:SuccessComponent},
  {path: "fail", component:FailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
