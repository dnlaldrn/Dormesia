import { Component } from '@angular/core';
import { HomePage } from '../home-page/home-page';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroSectionComponent } from "../../components/hero-section-component/hero-section-component";

@Component({
  selector: 'app-about-page',
  imports: [ CommonModule, HeroSectionComponent],
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
   description ="Stanza is a dorm listing web application developed by Daniel Manjares, a Computer Science student at Batangas State University. The platform was created with the goal of helping students find temporary shelter, dormitories, apartments, and bed spaces in a faster, easier, and more modern way through the use of technology. Searching for student accommodation can often be stressful and time-consuming, especially for students who are unfamiliar with the area or have limited access to reliable information. Stanza aims to solve this problem by providing a centralized online platform where students can conveniently browse available dorm listings, compare options, and view important details such as pricing, amenities, room availability, and location. The application is designed to make the dorm-hunting process more organized and accessible by replacing traditional methods such as scattered social media posts, flyers, or word-of-mouth recommendations. Through a clean and user-friendly interface, students can explore different housing options that best fit their needs, preferences, and budget. In addition, Stanza also benefits dorm owners and landlords by giving them a digital platform to promote and manage their properties more efficiently. By connecting students and accommodation providers in one system, the application encourages convenience, accessibility, and better communication between both parties. As an ongoing project, Stanza continues to improve through the implementation of modern web technologies, responsive design, and user-centered features that aim to provide a smooth and reliable experience for users across different devices."
}
