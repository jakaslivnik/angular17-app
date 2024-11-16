import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  surname: string;
  position: string;
  sex: string;
  yearOfBirth: number;
  country: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  showAddEmployeeForm: boolean = false;
  showEditEmployeeForm: boolean = false;
  employeeForm: FormGroup;
  selectedEmployee: Employee | null = null;

  yearsList: number[] = [];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: [''],
      surname: [''],
      position: [''],
      sex: [''],
      yearOfBirth: [''],
      country: [''],
    });
  }

  ngOnInit() {
    for (let year = 1900; year <= 2024; year++) {
      this.yearsList.push(year);
    }
    this.loadEmployeesFromLocalStorage();
  }

  toggleAddEmployeeForm() {
    this.showAddEmployeeForm = true;
    this.showEditEmployeeForm = false;
    this.employeeForm.reset();
  }

  toggleEditEmployeeForm() {
    if (this.selectedEmployee) {
      this.showEditEmployeeForm = true;
      this.showAddEmployeeForm = false;
      this.employeeForm.patchValue(this.selectedEmployee); 
    }
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = {
        id: this.employees.length > 0 ? this.employees[this.employees.length - 1].id + 1 : 1,
        ...this.employeeForm.value
      };
      this.employees.push(newEmployee);
      this.saveEmployeesToLocalStorage();
      this.employeeForm.reset();
      this.showAddEmployeeForm = false;
    }
  }

  updateEmployee() {
    if (this.employeeForm.valid && this.selectedEmployee) {
      const index = this.employees.findIndex(emp => emp.id === this.selectedEmployee!.id);
      if (index > -1) {
        this.employees[index] = { ...this.selectedEmployee, ...this.employeeForm.value };
        this.saveEmployeesToLocalStorage();
        this.showEditEmployeeForm = false;
        this.selectedEmployee = null;
      }
    }
  }

  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }

  deleteSelectedEmployee() {
    if (this.selectedEmployee) {
      this.employees = this.employees.filter(emp => emp !== this.selectedEmployee);
      this.saveEmployeesToLocalStorage();
      this.selectedEmployee = null;
    }
  }

  saveEmployeesToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  closeEmployeeForm() {
    this.showAddEmployeeForm = false;
    this.showEditEmployeeForm = false;
    this.employeeForm.reset(); 
  }
  

  loadEmployeesFromLocalStorage() {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      this.employees = JSON.parse(storedEmployees);
    }
  }
}
