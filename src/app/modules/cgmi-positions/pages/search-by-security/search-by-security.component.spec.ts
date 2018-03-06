import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBySecurityComponent } from './search-by-security.component';

describe('SearchBySecurityComponent', () => {
  let component: SearchBySecurityComponent;
  let fixture: ComponentFixture<SearchBySecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBySecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBySecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
