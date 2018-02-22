import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsrRowComponent } from './gsr-row.component';

describe('GsrRowComponent', () => {
  let component: GsrRowComponent;
  let fixture: ComponentFixture<GsrRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsrRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsrRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
