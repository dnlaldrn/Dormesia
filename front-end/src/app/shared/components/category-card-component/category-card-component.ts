import { Component } from '@angular/core';

interface Category{
  img : string,
  description: string
} 

@Component({
  selector: 'app-category-card-component',
  imports: [],
  templateUrl: './category-card-component.html',
  styleUrl: './category-card-component.css',
})
export class CategoryCardComponent {
  categoryitems: Category[] = [{
     img : '/assets/img/bedspace.png',
     description: 'Bedspace'
  },
  {
     img : '/assets/img/room.png',
     description: 'Room for Rent'
  },
  {
     img : '/assets/img/studio.png',
     description: 'Studio Unit'
  },
  {
     img : '/assets/img/apartment.png',
     description: 'Apartment'
  },
  {
     img : '/assets/img/house.png',
     description: 'House'
  },
  {
     img : '/assets/img/dormitory.png',
     description: 'Dormitory'
  },
]
    
  }

