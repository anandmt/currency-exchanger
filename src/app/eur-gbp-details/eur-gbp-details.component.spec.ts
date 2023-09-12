import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurGbpDetailsComponent } from './eur-gbp-details.component';

describe('EurGbpDetailsComponent', () => {
  let component: EurGbpDetailsComponent;
  let fixture: ComponentFixture<EurGbpDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EurGbpDetailsComponent]
    });
    fixture = TestBed.createComponent(EurGbpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
