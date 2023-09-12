import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CurrencyService } from './../services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-grid',
  templateUrl: './currency-grid.component.html',
  styleUrls: ['./currency-grid.component.css'],
})
export class CurrencyGridComponent implements OnInit, OnDestroy {
  //@Input() amount!: number;
  private subscription!: Subscription;
  private _amount: number = 1;

  @Input() set amount(value: number) {
    if (value !== this._amount) {
      this._amount = value;
      this.convertCurrency(); // Trigger conversion when amount changes
    }
  }
  @Output() conversionCompleted = new EventEmitter<
    { name: string; code: string; convertedAmount: number }[]
  >();

  convertedValues: { name: string; code: string; convertedAmount: number }[] =
    [];

  ngOnInit() {
    this.convertCurrency();
    this.subscription = this.currencyService
      .triggerConversion$()
      .subscribe(() => {
        // Trigger the conversion when notified
        this._amount = this.currencyService.getAmount();
        this.convertCurrency();
      });
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }

  constructor(private currencyService: CurrencyService) {}

  convertCurrency() {
    // Fetch exchange rates once
    this.currencyService
      .getExchangeRates('USD,INR,AED,JPY,GBP,CAD,AUD,CNY,SEK')
      .subscribe(
        (data: any) => {
          const exchangeRates = data.rates;
          //console.log(exchangeRates);

          // Calculate conversions for popular currencies
          this.convertedValues = [
            {
              name: 'United States Dollar',
              code: 'USD',
              convertedAmount: this._amount * exchangeRates['USD'],
            },
            {
              name: 'Indian Rupees',
              code: 'INR',
              convertedAmount: this._amount * exchangeRates['INR'],
            },
            {
              name: 'United Arab Emirates',
              code: 'AED',
              convertedAmount: this._amount * exchangeRates['AED'],
            },
            {
              name: 'Japanese Yen',
              code: 'JPY',
              convertedAmount: this._amount * exchangeRates['JPY'],
            },
            {
              name: 'British Pound Sterling',
              code: 'GBP',
              convertedAmount: this._amount * exchangeRates['GBP'],
            },
            {
              name: 'Canadian Dollar',
              code: 'CAD',
              convertedAmount: this._amount * exchangeRates['CAD'],
            },
            {
              name: 'Australian Dollar',
              code: 'AUD',
              convertedAmount: this._amount * exchangeRates['AUD'],
            },
            {
              name: 'Chinese Yuan',
              code: 'CNY',
              convertedAmount: this._amount * exchangeRates['CNY'],
            },
            {
              name: 'Swedish Krona',
              code: 'SEK',
              convertedAmount: this._amount * exchangeRates['SEK'],
            },
          ];

          // Emit the converted values
          this.conversionCompleted.emit(this.convertedValues);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
