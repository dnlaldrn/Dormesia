import { CurrencyPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';

@Component({
  selector: 'app-donation-component',
  imports: [CurrencyPipe],
  templateUrl: './donation-component.html',
  styleUrl: './donation-component.css',
})
export class DonationComponent {
  // Use a signal for the selected amount
  amountChosen = signal<string>('');

  // Derived state: labels for the UI
  buttonLabel = computed(() => {
    const amount = this.amountChosen();
    return amount ? `Donate ₱${amount}` : 'Select an Amount';
  });

  donateFunction(amount: string): void {
    this.amountChosen.set(amount);
  }
}
