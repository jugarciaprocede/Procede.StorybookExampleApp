import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent, TextFieldComponent, DialogComponent } from '@procede/ps-lib';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, TextFieldComponent, DialogComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';
  showErrorDialog = false;
  errorMessage = '';

  constructor(private router: Router) {}

  onUsernameChange(value: string): void {
    this.username = value;
  }

  onPasswordChange(value: string): void {
    this.password = value;
  }

  onLogin(): void {
    const errors: string[] = [];

    if (!this.username.trim()) {
      errors.push('Username is required.');
    }
    if (!this.password.trim()) {
      errors.push('Password is required.');
    }

    if (errors.length > 0) {
      this.errorMessage = errors.join(' ');
      this.showErrorDialog = true;
      return;
    }

    this.router.navigate(['/dashboard']);
  }

  closeDialog(): void {
    this.showErrorDialog = false;
  }
}
