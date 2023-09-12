import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  convertedValues: { name: string; code: string; convertedAmount: number }[] =
    [];

  onConversionCompleted(
    convertedValues: { name: string; code: string; convertedAmount: number }[]
  ) {
    // Handle the converted values here, e.g., store them in a variable for display
    this.convertedValues = convertedValues;
    // console.log('Converted Values:', convertedValues);
  }
}
