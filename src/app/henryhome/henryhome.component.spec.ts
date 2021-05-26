import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenryhomeComponent } from './henryhome.component';

describe('HenryhomeComponent', () => {
  let component: HenryhomeComponent;
  let fixture: ComponentFixture<HenryhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenryhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
