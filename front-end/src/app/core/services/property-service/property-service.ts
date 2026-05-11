import { Injectable ,signal,computed} from '@angular/core';

export interface Property {
  readonly propertyId : number;
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
  private readonly propertiesState = signal<Property[]>([
    {
      propertyId:1,
      propertyName: 'House 1',
      category: 'House',
      rating: 5,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
    {
        propertyId:2,
      propertyName: 'House 1',
      category: 'Bed Space',
      rating: 3,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
    {
        propertyId:3,
      propertyName: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
    {
        propertyId:4,
      propertyName: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
    {
        propertyId:5,
      propertyName: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
    {
        propertyId:6,
      propertyName: 'House 1',
      category: 'Apartment',
      rating: 2,
      img: './assets/img/home-img.png',
      address: 'Kumintang, Batangas City',
      price: 2000,
    },
  ]);
  
  readonly allProperties = this.propertiesState.asReadonly();

  getAllProperty() {
    return this.allProperties;
    
  }
  getPropertyById(id: number): Property | undefined {
    return this.propertiesState().find(p => p.propertyId === id);
  }
}
