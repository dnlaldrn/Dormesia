import { Component, inject,signal,computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PropertyDetailsComponent } from '../../components/property-details-component/owner-details-component';
import { PropertyService } from '../../../core/services/property-service/property-service';
import { CurrencyPipe } from '@angular/common';
import {RatingComponent} from '../../components/rating-component/rating-component'

@Component({
  selector: 'app-property-details-page',
  imports: [ RouterLink, PropertyDetailsComponent, CurrencyPipe,RatingComponent],
  templateUrl: './property-details-page.html',
  styleUrl: './property-details-page.css',
})
export class PropertyDetailsPage {
    private readonly propertyService = inject(PropertyService);
  
    // This input captures the 'propertyId' from the URL route automatically
    // Note: URL params are strings, so we convert it to a number
     readonly propertyId = input.required<string>();
  
    // Use computed to reactively find the property whenever the ID changes
    readonly property = computed(() => {
      const id = Number(this.propertyId());
      return this.propertyService.getPropertyById(id);
    });

     readonly properties = this.propertyService.allProperties;


  
}
