import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-hero-section-component',
  imports: [],
  templateUrl: './hero-section-component.html',
  styleUrl: './hero-section-component.css',
})
export class HeroSectionComponent {

  @Input() title: string = ''; 
  @Input() description: string = '';
  
}
