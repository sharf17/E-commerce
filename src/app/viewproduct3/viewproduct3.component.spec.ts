import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewproduct3Component } from './viewproduct3.component';

describe('Viewproduct3Component', () => {
  let component: Viewproduct3Component;
  let fixture: ComponentFixture<Viewproduct3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewproduct3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewproduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
