import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrencyExchangerComponent,
    EurUsdDetailsComponent,
    EurGbpDetailsComponent,
    HeaderComponent,
    CurrencyGridComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
