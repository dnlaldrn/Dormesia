import { Injectable } from '@angular/core';

export interface Property {
  readonly propertyName: string;
  readonly category: string;
  readonly address: string;
  readonly rating: number;
  readonly img: string;
}

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  allProperties: Property[] = [
    {
      propertyName: 'House 1',
      category: 'House',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
    },
    {
      propertyName: 'House 1',
      category: 'Bed Space',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
    },
    {
      propertyName: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
    },
  ];

  getAllProperty() {
    return this.allProperties;
  }
}
