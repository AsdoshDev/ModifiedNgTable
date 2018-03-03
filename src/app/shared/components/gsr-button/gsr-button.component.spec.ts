import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsrButtonComponent } from './gsr-button.component';

describe('GsrButtonComponent', () => {
  let component: GsrButtonComponent;
  let fixture: ComponentFixture<GsrButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsrButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
