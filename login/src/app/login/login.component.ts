import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
  
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      if (username === 'abdul' && password === 'rahman2000') {
        this.router.navigate(['/admin']);
      } else {
        this.loginError = true;
      }
    }
  }
}

