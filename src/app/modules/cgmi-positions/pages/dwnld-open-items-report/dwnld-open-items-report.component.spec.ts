import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwnldOpenItemsReportComponent } from './dwnld-open-items-report.component';

describe('DwnldOpenItemsReportComponent', () => {
  let component: DwnldOpenItemsReportComponent;
  let fixture: ComponentFixture<DwnldOpenItemsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwnldOpenItemsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwnldOpenItemsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
