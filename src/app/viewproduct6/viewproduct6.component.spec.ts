import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewproduct6Component } from './viewproduct6.component';

describe('Viewproduct6Component', () => {
  let component: Viewproduct6Component;
  let fixture: ComponentFixture<Viewproduct6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewproduct6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewproduct6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
