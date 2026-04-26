import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true, // Ensure standalone is true if you're not using NgModules
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  // Mock Credentials
  private readonly validEmail = 'daniel@gmail.com';
  private readonly validPassword = 'daniel24';

  constructor(private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    }, { 
      // We bind 'this' so the validator can see validEmail/validPassword
      validators: this.credentialsValidator.bind(this) 
    });
  }

  credentialsValidator(g: FormGroup) {
    const email = g.get('email')?.value;
    const password = g.get('password')?.value;

    return (email === this.validEmail && password === this.validPassword)
      ? null 
      : { identityMismatch: true };
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/']);
    } else {
      // Mark all as touched so the user sees red borders/messages
      this.loginForm.markAllAsTouched();
    }
  }
}