import { Component, inject,signal,computed, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyDetailsComponent } from '../../components/property-details-component/property-details-component';

@Component({
  selector: 'app-property-details-page',
  imports: [ RouterOutlet,PropertyDetailsComponent],
  templateUrl: './property-details-page.html',
  styleUrl: './property-details-page.css',
})
export class PropertyDetailsPage {
   
  
}
