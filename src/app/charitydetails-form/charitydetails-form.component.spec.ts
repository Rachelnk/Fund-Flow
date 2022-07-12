import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitydetailsFormComponent } from './charitydetails-form.component';

describe('CharitydetailsFormComponent', () => {
  let component: CharitydetailsFormComponent;
  let fixture: ComponentFixture<CharitydetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharitydetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitydetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
