import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsrModalComponent } from './gsr-modal.component';

describe('GsrModalComponent', () => {
  let component: GsrModalComponent;
  let fixture: ComponentFixture<GsrModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsrModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsrModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
