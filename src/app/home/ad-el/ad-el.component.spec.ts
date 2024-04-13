import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdElComponent } from './ad-el.component';

describe('AdElComponent', () => {
  let component: AdElComponent;
  let fixture: ComponentFixture<AdElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdElComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
