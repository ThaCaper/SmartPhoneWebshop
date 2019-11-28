import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversAddComponent } from './covers-add.component';

describe('CoversAddComponent', () => {
  let component: CoversAddComponent;
  let fixture: ComponentFixture<CoversAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoversAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoversAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
