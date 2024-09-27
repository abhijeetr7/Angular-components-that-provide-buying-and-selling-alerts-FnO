import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  symbol: string = 'AAPL';  // Default stock symbol
  rsi: number = 50;
  movingAvg: number = 100;
  useMACD: boolean = true;  // Option to use MACD
  useBollingerBands: boolean = true;  // Option to use Bollinger Bands

  @Output() settingsChanged = new EventEmitter<{ 
    symbol: string, 
    rsi: number, 
    movingAvg: number, 
    useMACD: boolean, 
    useBollingerBands: boolean 
  }>();

  updateSettings() {
    this.settingsChanged.emit({
      symbol: this.symbol,
      rsi: this.rsi,
      movingAvg: this.movingAvg,
      useMACD: this.useMACD,
      useBollingerBands: this.useBollingerBands
    });
  }
}