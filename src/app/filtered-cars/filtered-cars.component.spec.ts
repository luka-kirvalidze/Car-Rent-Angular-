import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredCarsComponent } from './filtered-cars.component';

describe('FilteredCarsComponent', () => {
  let component: FilteredCarsComponent;
  let fixture: ComponentFixture<FilteredCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilteredCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteredCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
