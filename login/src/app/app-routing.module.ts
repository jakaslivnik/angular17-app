import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component'; 
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDataFormComponent } from './employee-data-form/employee-data-form.component';
import { EmployeeTasksComponent } from './employee-tasks/employee-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  { 
    path: 'admin', 
    component: AdminComponent, 
    children: [
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'employee-data-form', component: EmployeeDataFormComponent },
      { path: 'employee-tasks', component: EmployeeTasksComponent },
      { path: 'add-task', component: AddTaskComponent },
      { path: '', redirectTo: 'employees', pathMatch: 'full' } 
    ]
  },
  { path: '', component: LoginComponent }, 
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




