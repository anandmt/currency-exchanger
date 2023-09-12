import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurUsdDetailsComponent } from './eur-usd-details.component';

describe('EurUsdDetailsComponent', () => {
  let component: EurUsdDetailsComponent;
  let fixture: ComponentFixture<EurUsdDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EurUsdDetailsComponent]
    });
    fixture = TestBed.createComponent(EurUsdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
