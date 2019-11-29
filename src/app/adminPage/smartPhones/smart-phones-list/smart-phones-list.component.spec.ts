import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhonesListComponent } from './smart-phones-list.component';

describe('SmartPhonesListComponent', () => {
  let component: SmartPhonesListComponent;
  let fixture: ComponentFixture<SmartPhonesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPhonesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhonesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
