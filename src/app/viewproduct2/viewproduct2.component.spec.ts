import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewproduct2Component } from './viewproduct2.component';

describe('Viewproduct2Component', () => {
  let component: Viewproduct2Component;
  let fixture: ComponentFixture<Viewproduct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewproduct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewproduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
