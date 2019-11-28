import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneAddComponent } from './smartphone-add.component';

describe('SmartphoneAddComponent', () => {
  let component: SmartphoneAddComponent;
  let fixture: ComponentFixture<SmartphoneAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
