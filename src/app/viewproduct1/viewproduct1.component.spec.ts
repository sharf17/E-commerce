import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewproduct1Component } from './viewproduct1.component';

describe('Viewproduct1Component', () => {
  let component: Viewproduct1Component;
  let fixture: ComponentFixture<Viewproduct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewproduct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewproduct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
