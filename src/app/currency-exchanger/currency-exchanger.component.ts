import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../services/currency.service';

@Component({
  selector: 'app-currency-exchanger',
  templateUrl: './currency-exchanger.component.html',
  styleUrls: ['./currency-exchanger.component.css'],
})
export class CurrencyExchangerComponent implements OnInit {
  amount: number = 1;
  fromCurrency: string = 'EUR';
  toCurrency: string = 'USD';
  result: number | null = null;
  currencySymbols: Record<string, string> = {}; // Store currency symbols
  isSwapping: boolean = false; // Property to control the rotation

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.getCurrencySymbols();
    this.convertCurrency();
  }
  getCurrencyOptions(): { key: string; value: string }[] {
    // Create an array of key-value pairs from the currencySymbols object
    return Object.keys(this.currencySymbols).map((key) => ({
      key,
      value: this.currencySymbols[key],
    }));
  }

  getCurrencySymbols(): any {
    this.currencyService.getCurrencySymbols().subscribe(
      (data: any) => {
        this.currencySymbols = data.symbols;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  convertCurrency() {
    if (this.amount && this.fromCurrency && this.toCurrency) {
      // Set the amount in the service
      this.currencyService.setAmount(this.amount);
      // Trigger the conversion in the CurrencyGridComponent
      this.currencyService.notifyConversionTrigger();

      this.currencyService.getExchangeRates(this.toCurrency).subscribe(
        (data: any) => {
          if (data.rates && data.rates[this.toCurrency]) {
            this.result = this.amount * data.rates[this.toCurrency];
          } else {
            this.result = null;
          }
        },
        () => {
          this.result = null;
        }
      );
    }
  }

  swapCurrencies() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
    this.clearResult();

    // Toggle isSwapping to trigger the rotation
    this.isSwapping = !this.isSwapping;
    setTimeout(() => {
      this.isSwapping = false; // Reset isSwapping after the animation
    }, 300);
  }

  clearResult() {
    this.result = null;
  }
}
