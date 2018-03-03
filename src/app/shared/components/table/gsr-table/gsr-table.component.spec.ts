import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsrTableComponent } from './gsr-table.component';

describe('GsrTableComponent', () => {
  let component: GsrTableComponent;
  let fixture: ComponentFixture<GsrTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsrTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
