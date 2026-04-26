import { Component } from '@angular/core';
import {DonationComponent} from '../../components/donation-component/donation-component'
import { NavBarComponent } from '../../components/nav-bar-component/nav-bar-component';

@Component({
  selector: 'app-donation-page',
  imports: [DonationComponent, NavBarComponent],
  templateUrl: './donation-page.html',
  styleUrl: './donation-page.css',
})
export class DonationPage {}
