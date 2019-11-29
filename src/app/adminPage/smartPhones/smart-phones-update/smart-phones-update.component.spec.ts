import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhonesUpdateComponent } from './smart-phones-update.component';

describe('SmartPhonesUpdateComponent', () => {
  let component: SmartPhonesUpdateComponent;
  let fixture: ComponentFixture<SmartPhonesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPhonesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhonesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
