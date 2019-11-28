import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversUpdateComponent } from './covers-update.component';

describe('CoversUpdateComponent', () => {
  let component: CoversUpdateComponent;
  let fixture: ComponentFixture<CoversUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoversUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoversUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
