import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
import { CurrencyService } from './../services/currency.service';

@Component({
  selector: 'app-eur-gbp-details',
  templateUrl: './eur-gbp-details.component.html',
  styleUrls: ['./eur-gbp-details.component.css'],
})
export class EurGbpDetailsComponent implements OnInit {
  exchangeRate: number | undefined;
  toCurrency: string = 'GBP';
  constructor(
    private http: HttpClient,
    private router: Router,
    private currencyService: CurrencyService
  ) {}

  ngOnInit() {
    // Fetch data from the Fixer API for EUR to GBP

    this.currencyService
      .getBaseToTargetExchangeRate(this.toCurrency)
      .subscribe((data: any) => {
        if (data.rates && data.rates[this.toCurrency]) {
          this.exchangeRate = data.rates[this.toCurrency];
        }
      });
  }

  navigateBack() {
    // Navigate back to the home page or any other desired route
    this.router.navigate(['/']);
  }
}
