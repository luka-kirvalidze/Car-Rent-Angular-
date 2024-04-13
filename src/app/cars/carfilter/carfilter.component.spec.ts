import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarfilterComponent } from './carfilter.component';

describe('CarfilterComponent', () => {
  let component: CarfilterComponent;
  let fixture: ComponentFixture<CarfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarfilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
