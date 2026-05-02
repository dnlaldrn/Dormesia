import { Component } from '@angular/core';
import {HeroSectionComponent} from '../../components/hero-section-component/hero-section-component'
import {CategoryCardComponent} from '../../../shared/components/category-card-component/category-card-component'
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, CommonModule,RouterLink, CategoryCardComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
constructor(public router: Router) {}

  isRoute(route: string): boolean {
    return this.router.url === route;
  }
}
