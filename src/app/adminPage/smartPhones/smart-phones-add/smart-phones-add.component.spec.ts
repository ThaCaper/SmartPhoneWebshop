import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhonesAddComponent } from './smart-phones-add.component';

describe('SmartPhonesAddComponent', () => {
  let component: SmartPhonesAddComponent;
  let fixture: ComponentFixture<SmartPhonesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPhonesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhonesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
