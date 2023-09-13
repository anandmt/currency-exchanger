import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CurrencyExchangerComponent } from './currency-exchanger/currency-exchanger.component';
import { EurUsdDetailsComponent } from './eur-usd-details/eur-usd-details.component';
import { EurGbpDetailsComponent } from './eur-gbp-details/eur-gbp-details.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from './services/currency.service';
import { CurrencyGridComponent } from './currency-grid/currency-grid.component';
import { HistoricalRatesComponent } from './historical-rates/historical-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrencyExchangerComponent,
    EurUsdDetailsComponent,
    EurGbpDetailsComponent,
    HeaderComponent,
    CurrencyGridComponent,
    HistoricalRatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent, HistoricalRatesComponent],
})
export class AppModule {}
