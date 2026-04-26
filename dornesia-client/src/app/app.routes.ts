import { Routes } from '@angular/router';
import { HomePage } from './features/pages/home-page/home-page';
import {AboutPage} from './features/pages/about-page/about-page'
import { LoginPage } from './features/pages/login-page/login-page';
import { SignUpPage } from './features/pages/sign-up-page/sign-up-page';
import {DonationPage} from './features/pages/donation-page/donation-page'

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'login', component: LoginPage },
  { path: 'sign-up', component: SignUpPage },
  { path: 'donation', component: DonationPage}
];
