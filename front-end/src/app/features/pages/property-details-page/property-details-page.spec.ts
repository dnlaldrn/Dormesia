import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailsPage } from './property-details-page';

describe('PropertyDetailsPage', () => {
  let component: PropertyDetailsPage;
  let fixture: ComponentFixture<PropertyDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyDetailsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
