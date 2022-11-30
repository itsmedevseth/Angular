import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/crud/employee-list/employee-list.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { EmployeeDetailsComponent } from './component/crud/employee-details/employee-details.component';


const routes: Routes = [
  {path:'', component: EmployeeListComponent},
  {path:'employee', component: EmployeeListComponent},
  {path: 'employee/detail', component: EmployeeDetailsComponent},
  {path:'directive', component: DirectiveComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
