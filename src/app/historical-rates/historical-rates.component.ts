import { Component, Input, OnInit } from '@angular/core';
import { MockApiService } from './../services/mock-api.service';

@Component({
  selector: 'app-historical-rates',
  templateUrl: './historical-rates.component.html',
  styleUrls: ['./historical-rates.component.css'],
})
export class HistoricalRatesComponent implements OnInit {
  @Input() baseCurrency: string = 'EUR'; // this will be input going forward
  @Input() targetCurrency: string = 'USD'; // this will be input going forward
  historicalData: any;
  chartData: any[] = [];
  chartLabels: string[] = [];
  chartOptions: any = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Rates',
        },
      },
    },
  };
  chartLegend = true;
  chartType = 'line';

  constructor(private MockApiService: MockApiService) {}

  ngOnInit() {
    this.fetchHistoricalData();
  }

  fetchHistoricalData() {
    this.MockApiService.getHistoricalRates().subscribe((data: any) => {
      // Process data and set it to this.historicalData
      this.historicalData = data;

      // Extract and format the data for the chart
      this.chartLabels = Object.keys(this.historicalData.rates);
      this.chartData = [
        {
          data: Object.values(this.historicalData.rates),
          label: `${this.baseCurrency} to ${this.targetCurrency}`,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
        },
      ];
    });
  }
}
