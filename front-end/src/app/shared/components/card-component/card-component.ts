import { Component, inject ,OnInit} from '@angular/core';
import {PropertyService} from '../../../core/services/property-service/property-service'
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent implements OnInit {
  // Inject the service
  private propertyService = inject(PropertyService);

  protected readonly properties = this.propertyService.allProperties; 

  ngOnInit() :void {
    this.propertyService.getAllProperty();
  }
}
