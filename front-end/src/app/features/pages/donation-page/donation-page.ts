import { Component } from '@angular/core';
import {DonationComponent} from '../../components/donation-component/donation-component'

@Component({
  selector: 'app-donation-page',
  imports: [DonationComponent],
  templateUrl: './donation-page.html',
  styleUrl: './donation-page.css',
})
export class DonationPage {}
