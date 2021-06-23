import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmsComponent } from './components/ems/ems/ems.component';
import { ManagerComponent } from './components/manager/manager.component';
import { EmployeeComponent } from './components/employee/employee.component';


const routes: Routes = [{path:'', redirectTo:'/login', pathMatch: 'full'},
  
  { path: 'login', component: LoginComponent },
{ path: 'ems', component: EmsComponent },
{ path: 'employee', component: EmployeeComponent },
{ path: 'manager', component: ManagerComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmsComponent,EmployeeComponent,LoginComponent,ManagerComponent]
