import { Component , inject, input, computed} from '@angular/core';
import { Property } from '../../../core/services/property-service/property-service';

@Component({
  selector: 'app-property-details-component',
  imports: [],
  templateUrl: './property-details-component.html',
  styleUrl: './property-details-component.css',
})
export class PropertyDetailsComponent {
  readonly property = input.required<Property>()

}
