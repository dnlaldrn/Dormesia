import { Component , Input} from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero-section-component',
  imports: [RouterLink],
  templateUrl: './hero-section-component.html',
  styleUrl: './hero-section-component.css',
})
export class HeroSectionComponent {

  @Input() title: string = ''; 
  @Input() description: string = '';
  
}
