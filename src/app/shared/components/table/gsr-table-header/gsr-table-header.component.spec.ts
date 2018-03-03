import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsrTableHeaderComponent } from './gsr-table-header.component';

describe('GsrTableHeaderComponent', () => {
  let component: GsrTableHeaderComponent;
  let fixture: ComponentFixture<GsrTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsrTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsrTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
