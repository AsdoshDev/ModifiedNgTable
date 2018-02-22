import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsrTabsComponent } from './gsr-tabs.component';

describe('GsrTabsComponent', () => {
  let component: GsrTabsComponent;
  let fixture: ComponentFixture<GsrTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsrTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsrTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
