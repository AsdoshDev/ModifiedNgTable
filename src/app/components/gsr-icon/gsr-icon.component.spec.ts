import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsrIconComponent } from './gsr-icon.component';

describe('GsrIconComponent', () => {
  let component: GsrIconComponent;
  let fixture: ComponentFixture<GsrIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsrIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsrIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
