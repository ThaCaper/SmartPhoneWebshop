import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversDetailsComponent } from './covers-details.component';

describe('CoversDetailsComponent', () => {
  let component: CoversDetailsComponent;
  let fixture: ComponentFixture<CoversDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoversDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoversDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
