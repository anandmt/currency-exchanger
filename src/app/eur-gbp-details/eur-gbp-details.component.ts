import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-eur-gbp-details',
  templateUrl: './eur-gbp-details.component.html',
  styleUrls: ['./eur-gbp-details.component.css'],
})
export class EurGbpDetailsComponent implements OnInit {
  exchangeRate: number | undefined;
  isLoading: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // Fetch data from the Fixer API for EUR to GBP
    this.http
      .get('https://api.fixer.io/latest?&symbols=GBP')
      .subscribe((data: any) => {
        this.exchangeRate = data.rates.GBP;
        this.isLoading = false;
      });
  }

  navigateBack() {
    // Navigate back to the home page or any other desired route
    this.router.navigate(['/']);
  }
}
