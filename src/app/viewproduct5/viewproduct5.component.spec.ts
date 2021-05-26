import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewproduct5Component } from './viewproduct5.component';

describe('Viewproduct5Component', () => {
  let component: Viewproduct5Component;
  let fixture: ComponentFixture<Viewproduct5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewproduct5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewproduct5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
