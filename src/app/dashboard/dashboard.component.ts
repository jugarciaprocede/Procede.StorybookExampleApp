import { Component } from '@angular/core';
import { ButtonComponent, TextFieldComponent, DialogComponent } from '@procede/ps-lib';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonComponent, TextFieldComponent, DialogComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
