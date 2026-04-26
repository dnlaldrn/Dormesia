import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-donation-component',
  imports: [CurrencyPipe],
  templateUrl: './donation-component.html',
  styleUrl: './donation-component.css',
})
export class DonationComponent {
amountChoosen=''

  donateFunction(amount : string){
     this.amountChoosen = amount
     return this.amountChoosen;
  
    

  }
}
