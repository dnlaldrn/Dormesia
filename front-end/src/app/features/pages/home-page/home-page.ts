import { Component } from '@angular/core';
import {HeroSectionComponent} from '../../components/hero-section-component/hero-section-component'
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, CommonModule,RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
constructor(public router: Router) {}

  // Helper to check if a route is active
  isRoute(route: string): boolean {
    return this.router.url === route;
  }
}
