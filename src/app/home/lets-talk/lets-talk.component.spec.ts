import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsTalkComponent } from './lets-talk.component';

describe('LetsTalkComponent', () => {
  let component: LetsTalkComponent;
  let fixture: ComponentFixture<LetsTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LetsTalkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LetsTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
