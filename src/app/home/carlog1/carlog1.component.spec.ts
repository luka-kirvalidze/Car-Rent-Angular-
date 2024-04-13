import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carlog1Component } from './carlog1.component';

describe('Carlog1Component', () => {
  let component: Carlog1Component;
  let fixture: ComponentFixture<Carlog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carlog1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Carlog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
