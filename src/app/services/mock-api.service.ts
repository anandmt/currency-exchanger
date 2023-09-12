import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import {
  mockApiResponse,
  mock9SymbolsResponse,
  mockSymbolsResponse,
} from './../../assets/mock-api-response'; // Import the mock response

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private amount!: number;
  // Simulate an API request and return the mock response
  getCurrencyConversion(): Observable<any> {
    return of(mockApiResponse);
  }

  getExchangeRates(baseCurrency: string): Observable<any> {
    // Make an HTTP GET request to the Fixer.io API to fetch exchange rates.
    return of(mockApiResponse);
  }

  getBaseToTargetExchangeRate(targetCurrency: string): Observable<any> {
    // Make an HTTP GET request to the Fixer.io API to fetch exchange rates.
    return of(mock9SymbolsResponse);
  }

  getCurrencySymbols(): Observable<any> {
    return of(mockSymbolsResponse);
  }

  getAmount(): number {
    return this.amount;
  }

  setAmount(amount: number) {
    this.amount = amount;
  }

  private triggerConversionSubject = new Subject<void>();

  triggerConversion$(): Observable<void> {
    return this.triggerConversionSubject.asObservable();
  }

  notifyConversionTrigger() {
    this.triggerConversionSubject.next();
  }
}
