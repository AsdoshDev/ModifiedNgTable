import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgmiPositionsComponent } from './cgmi-positions.component';

describe('CgmiPositionsComponent', () => {
  let component: CgmiPositionsComponent;
  let fixture: ComponentFixture<CgmiPositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgmiPositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgmiPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
