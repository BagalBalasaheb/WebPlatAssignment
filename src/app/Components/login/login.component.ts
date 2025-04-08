import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: ApiService, private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['dashboard/profile']);
    }
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken);
          this.router.navigate(['/dashboard/profile']);
        },
        error: () => {
          alert('Invalid credentials');
          this.form.reset();
        },
      });
    }
  }
}
