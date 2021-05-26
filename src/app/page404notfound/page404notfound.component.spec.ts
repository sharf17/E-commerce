import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404notfoundComponent } from './page404notfound.component';

describe('Page404notfoundComponent', () => {
  let component: Page404notfoundComponent;
  let fixture: ComponentFixture<Page404notfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404notfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404notfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
