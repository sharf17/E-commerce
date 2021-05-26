import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewproduct4Component } from './viewproduct4.component';

describe('Viewproduct4Component', () => {
  let component: Viewproduct4Component;
  let fixture: ComponentFixture<Viewproduct4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewproduct4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewproduct4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
