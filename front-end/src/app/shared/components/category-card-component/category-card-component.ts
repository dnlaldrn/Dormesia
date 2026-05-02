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
     img : 'string',
     description: 'Bedspace'
  },
  {
     img : 'string',
     description: 'Room for Rent'
  },
  {
     img : 'string',
     description: 'Studio Unit'
  },
  {
     img : 'string',
     description: 'Apartment'
  },
  {
     img : 'string',
     description: 'House'
  },
  {
     img : 'string',
     description: 'Dormitory'
  },
]
    
  }

