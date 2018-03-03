import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsrColumnHeaderComponent } from './gsr-column-header.component';

describe('GsrColumnHeaderComponent', () => {
  let component: GsrColumnHeaderComponent;
  let fixture: ComponentFixture<GsrColumnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsrColumnHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsrColumnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
