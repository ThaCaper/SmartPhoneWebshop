import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhonesDetailsComponent } from './smart-phones-details.component';

describe('SmartPhonesDetailsComponent', () => {
  let component: SmartPhonesDetailsComponent;
  let fixture: ComponentFixture<SmartPhonesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPhonesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhonesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
