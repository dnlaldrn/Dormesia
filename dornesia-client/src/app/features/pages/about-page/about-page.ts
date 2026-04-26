import { Component } from '@angular/core';
import { HomePage } from '../home-page/home-page';
import { NavBarComponent } from '../../components/nav-bar-component/nav-bar-component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroSectionComponent } from "../../components/hero-section-component/hero-section-component";

@Component({
  selector: 'app-about-page',
  imports: [ NavBarComponent, CommonModule, HeroSectionComponent],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  constructor(public router: Router) {}

  // Helper to check if a route is active
  isRoute(route: string): boolean {
    return this.router.url === route;

    
  }

   title ='About Us'
   description ="Dormesia is a dorm listing web application developed by Daniel Manjares a Computer Science student at Batangas State University. This aims to help students to find their temporary shelter in a faster and modern way"
}
