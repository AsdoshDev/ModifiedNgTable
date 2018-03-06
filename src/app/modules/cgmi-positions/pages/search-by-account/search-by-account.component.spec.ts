import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByAccountComponent } from './search-by-account.component';

describe('SearchByAccountComponent', () => {
  let component: SearchByAccountComponent;
  let fixture: ComponentFixture<SearchByAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
