import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register-user',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'error',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
