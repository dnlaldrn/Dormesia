import { Component } from '@angular/core';
import { HomePage } from '../home-page/home-page';
import {LoginComponent} from '../../components/login-component/login-component'

@Component({
  selector: 'app-login-page',
  imports: [HomePage, LoginComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {}
