import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsrTableLevelDeciderComponent } from './gsr-table-level-decider.component';

describe('GsrTableLevelDeciderComponent', () => {
  let component: GsrTableLevelDeciderComponent;
  let fixture: ComponentFixture<GsrTableLevelDeciderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsrTableLevelDeciderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsrTableLevelDeciderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
