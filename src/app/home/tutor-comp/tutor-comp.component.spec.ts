import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorCompComponent } from './tutor-comp.component';

describe('TutorCompComponent', () => {
  let component: TutorCompComponent;
  let fixture: ComponentFixture<TutorCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
