import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyGridComponent } from './currency-grid.component';

describe('CurrencyGridComponent', () => {
  let component: CurrencyGridComponent;
  let fixture: ComponentFixture<CurrencyGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyGridComponent]
    });
    fixture = TestBed.createComponent(CurrencyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
