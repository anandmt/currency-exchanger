import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EurUsdDetailsComponent } from './eur-usd-details/eur-usd-details.component';
import { EurGbpDetailsComponent } from './eur-gbp-details/eur-gbp-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eur-usd-details', component: EurUsdDetailsComponent },
  { path: 'eur-gbp-details', component: EurGbpDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
