import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDataFormComponent } from './employee-data-form/employee-data-form.component';
import { EmployeeTasksComponent } from './employee-tasks/employee-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EmployeeListComponent,
    EmployeeDataFormComponent,
    EmployeeTasksComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

