import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-data-form',
  templateUrl: './employee-data-form.component.html',
  styleUrls: ['./employee-data-form.component.css']
})
export class EmployeeDataFormComponent implements OnInit {
  employeeForm!: FormGroup;
  days: number[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.days = Array.from({ length: 31 }, (_, i) => i + 1);

    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      position: ['', [Validators.required]],

      day: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(2024)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      country: ['', [Validators.required, Validators.minLength(2)]]
    });

    const savedData = localStorage.getItem('employeeFormData');
    if (savedData) {
      this.employeeForm.setValue(JSON.parse(savedData));
    }
  }

  onSave(): void {
    localStorage.setItem('employeeFormData', JSON.stringify(this.employeeForm.value));
    alert('Data saved!');
  }

  onDelete(): void {
    this.employeeForm.reset();
    localStorage.removeItem('employeeFormData');
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form Submitted', this.employeeForm.value);
    }
  }
}
