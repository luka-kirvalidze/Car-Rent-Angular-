import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubelComponent } from './subel.component';

describe('SubelComponent', () => {
  let component: SubelComponent;
  let fixture: ComponentFixture<SubelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
