import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carlog2Component } from './carlog2.component';

describe('Carlog2Component', () => {
  let component: Carlog2Component;
  let fixture: ComponentFixture<Carlog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Carlog2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Carlog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
