import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-parent',
  templateUrl: './sample-parent.component.html',
  styleUrl: './sample-parent.component.css'
})
export class SampleParentComponent {
  symbol: string = 'AAPL';
  rsi: number = 50;
  movingAvg: number = 100;
  useMACD: boolean = true;
  useBollingerBands: boolean = true;

  updateAlertSettings(settings: { 
    symbol: string, 
    rsi: number, 
    movingAvg: number, 
    useMACD: boolean, 
    useBollingerBands: boolean 
  }) {
    this.symbol = settings.symbol;
    this.rsi = settings.rsi;
    this.movingAvg = settings.movingAvg;
    this.useMACD = settings.useMACD;
    this.useBollingerBands = settings.useBollingerBands;
  }
}