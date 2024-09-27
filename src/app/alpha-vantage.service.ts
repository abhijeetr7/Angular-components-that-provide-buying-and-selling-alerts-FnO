import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlphaVantageService {
  private apiKey: string = 'YOUR_API_KEY';  // Add your Alpha Vantage API Key
  private apiUrl: string = 'https://www.alphavantage.co/query';

  constructor(private http: HttpClient) { }

  getRSI(symbol: string): Observable<any> {
    const url = `${this.apiUrl}?function=RSI&symbol=${symbol}&interval=daily&time_period=14&series_type=close&apikey=${this.apiKey}`;
    return this.http.get(url);
  }

  getMovingAverage(symbol: string): Observable<any> {
    const url = `${this.apiUrl}?function=SMA&symbol=${symbol}&interval=daily&time_period=20&series_type=close&apikey=${this.apiKey}`;
    return this.http.get(url);
  }

  getMACD(symbol: string): Observable<any> {
    const url = `${this.apiUrl}?function=MACD&symbol=${symbol}&interval=daily&series_type=close&apikey=${this.apiKey}`;
    return this.http.get(url);
  }

  getBollingerBands(symbol: string): Observable<any> {
    const url = `${this.apiUrl}?function=BBANDS&symbol=${symbol}&interval=daily&time_period=20&series_type=close&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}