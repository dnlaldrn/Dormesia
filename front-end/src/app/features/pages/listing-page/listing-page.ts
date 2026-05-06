import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PropertyService } from '../../../core/services/property-service/property-service';
import { CardComponent } from '../../../shared/components/card-component/card-component';
import {InputSearchComponent} from '../../../shared/components/input-search-component/input-search-component'

@Component({
  selector: 'app-listing-page',
  imports: [CardComponent,InputSearchComponent],
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingPage implements OnInit {
  private readonly propertyService = inject(PropertyService);

  protected readonly properties = this.propertyService.allProperties;

  ngOnInit(): void {
    this.propertyService.getAllProperty();
  }
}
