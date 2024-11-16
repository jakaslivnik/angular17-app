import { Component, OnInit } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
}

interface Employee {
  name: string;
  position: string;
  photoUrl: string;
  status: 'Active' | 'Inactive';
  tasks: Task[];
}

@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.css']
})
export class EmployeeTasksComponent implements OnInit {
  employees: Employee[] = [];
  newTaskTitle: string = '';
  selectedTask: Task | null = null;
  selectedEmployee: Employee | null = null;

  ngOnInit() {
    const storedEmployees = localStorage.getItem('employeesData');
    if (storedEmployees) {
      this.employees = JSON.parse(storedEmployees);
    } else {
      this.employees = [];
      this.saveEmployeesToStorage(); 
    }
  }

  addNewEmployee() {
    const newEmployee: Employee = {
      name: '',  
      position: '', 
      photoUrl: 'https://via.placeholder.com/50',
      status: 'Active',
      tasks: [{ title: 'New Task', completed: false }]
    };

    this.employees.push(newEmployee);
    this.saveEmployeesToStorage();
  }

  saveEmployeesToStorage() {
    localStorage.setItem('employeesData', JSON.stringify(this.employees));
  }

  deleteSelectedEmployee() {
    if (this.selectedEmployee) {
      const index = this.employees.indexOf(this.selectedEmployee);
      if (index !== -1) {
        this.employees.splice(index, 1);
        this.selectedEmployee = null;
        this.saveEmployeesToStorage();
      }
    }
  }

  selectEmployee(employee: Employee) {
    this.selectedEmployee = this.selectedEmployee === employee ? null : employee;
  }

  addNewTask() {
    if (this.newTaskTitle.trim() && this.selectedEmployee) {
      const newTask = { title: this.newTaskTitle, completed: false };
      this.selectedEmployee.tasks.push(newTask);
      this.newTaskTitle = '';
      this.saveEmployeesToStorage();
    }
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
    this.saveEmployeesToStorage();
  }

  selectTask(task: Task) {
    this.selectedTask = this.selectedTask === task ? null : task;
  }

  deleteSelectedTask() {
    if (this.selectedTask && this.selectedEmployee) {
      const index = this.selectedEmployee.tasks.indexOf(this.selectedTask);
      if (index !== -1) {
        this.selectedEmployee.tasks.splice(index, 1);
        this.selectedTask = null;
        this.saveEmployeesToStorage();
      }
    }
  }
}
