import { Component, Input, OnInit } from '@angular/core';
import { AlphaVantageService } from '../alpha-vantage.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
  @Input() symbol: string = 'AAPL';  // Default symbol, can be updated by user
  @Input() rsiValue: number = 50;
  @Input() movingAvgValue: number = 100;
  @Input() useMACD: boolean = true;  // Whether to use MACD
  @Input() useBollingerBands: boolean = true;  // Whether to use Bollinger Bands

  buyAlert: boolean = false;
  sellAlert: boolean = false;
  macdSignal: string = '';  // Store MACD signal
  bollingerSignal: string = '';  // Store Bollinger Band signal

  constructor(private alphaVantageService: AlphaVantageService) {}

  ngOnInit() {
    this.fetchMarketData();
  }

  fetchMarketData() {
    this.alphaVantageService.getRSI(this.symbol).subscribe(data => {
      this.rsiValue = data['Technical Analysis: RSI']['2023-09-26']['RSI'];  // Adjust for actual response date
      this.checkAlerts();
    });

    this.alphaVantageService.getMovingAverage(this.symbol).subscribe(data => {
      this.movingAvgValue = data['Technical Analysis: SMA']['2023-09-26']['SMA'];  // Adjust for actual response date
      this.checkAlerts();
    });

    if (this.useMACD) {
      this.alphaVantageService.getMACD(this.symbol).subscribe(data => {
        // Extract MACD signal, for simplicity assume 9-day EMA signal
        this.macdSignal = data['Technical Analysis: MACD']['2023-09-26']['MACD_Signal'];  // Adjust for actual response
        this.checkAlerts();
      });
    }

    if (this.useBollingerBands) {
      this.alphaVantageService.getBollingerBands(this.symbol).subscribe(data => {
        // Extract Bollinger Bands signal (upper band and lower band)
        const upperBand = data['Technical Analysis: BBANDS']['2023-09-26']['Real Upper Band'];
        const lowerBand = data['Technical Analysis: BBANDS']['2023-09-26']['Real Lower Band'];
        // Determine if the current price is near the upper or lower band (you would need the current price to implement this fully)
        this.bollingerSignal = 'Bollinger Band Signal Placeholder';  // Adjust with actual logic
        this.checkAlerts();
      });
    }
  }

  checkAlerts() {
    // Combine conditions from RSI, MACD, Bollinger Bands, and Moving Averages
    if (this.rsiValue < 30 && this.movingAvgValue > 50) {
      this.buyAlert = true;
      this.sellAlert = false;
    } else if (this.rsiValue > 70 && this.movingAvgValue < 50) {
      this.buyAlert = false;
      this.sellAlert = true;
    } else {
      this.buyAlert = false;
      this.sellAlert = false;
    }

    // Additional MACD and Bollinger Band logic can go here
  }
}