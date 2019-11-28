import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneUpdateComponent } from './smartphone-update.component';

describe('SmartphoneUpdateComponent', () => {
  let component: SmartphoneUpdateComponent;
  let fixture: ComponentFixture<SmartphoneUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
