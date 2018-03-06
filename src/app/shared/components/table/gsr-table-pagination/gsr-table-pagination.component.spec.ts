import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsrTablePaginationComponent } from './gsr-table-pagination.component';

describe('GsrTablePaginationComponent', () => {
  let component: GsrTablePaginationComponent;
  let fixture: ComponentFixture<GsrTablePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsrTablePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsrTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
