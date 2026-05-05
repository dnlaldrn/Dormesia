import { Injectable } from '@angular/core';

export interface Property {
  readonly propertyName: string;
  readonly category: string;
  readonly address: string;
  readonly rating: number;
  readonly img: string;
  readonly price: number;
}

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  allProperties: Property[] = [
    {
      propertyName: 'House 1',
      category: 'House',
      rating: 5,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
    {
      propertyName: 'House 1',
      category: 'Bed Space',
      rating: 3,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
    {
      propertyName: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
    {
      propertyName: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
    {
      propertyName: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
    {
      propertyName: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
  ];

  getAllProperty() {
    return this.allProperties;
  }
}
