import { Component } from '@angular/core';
import {SignUpComponent} from '../../components/sign-up-component/sign-up-component'
import { HomePage } from '../home-page/home-page';

@Component({
  selector: 'app-sign-up-page',
  imports: [SignUpComponent, HomePage],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {

}
