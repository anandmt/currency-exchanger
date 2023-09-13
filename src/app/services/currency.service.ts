import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private amount!: number;

  private apiKey = 'API_KEY_READ_FROM_ENV';
  private apiUrl = `http://data.fixer.io/api/latest?access_key=${this.apiKey}`;
  private apiCurrencySymbols = `http://data.fixer.io/api/symbols?access_key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

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

  getExchangeRates(baseCurrency: string): Observable<any> {
    // Make an HTTP GET request to the Fixer.io API to fetch exchange rates.
    return this.http.get<any>(`${this.apiUrl}&symbols=${baseCurrency}`);
  }

  getBaseToTargetExchangeRate(targetCurrency: string): Observable<any> {
    // Make an HTTP GET request to the Fixer.io API to fetch exchange rates.
    return this.http.get<any>(`${this.apiUrl}&symbols=${targetCurrency}`);
  }

  getCurrencySymbols(): Observable<any> {
    return this.http.get(this.apiCurrencySymbols);
  }
}
