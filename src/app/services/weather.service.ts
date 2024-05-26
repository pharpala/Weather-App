import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string, countryCode: string = 'EN'): Observable<WeatherData> {
    const url = `${environment.weatherApiBaseUrl}/city/${cityName}/${countryCode}`;
    const headers = new HttpHeaders()
      .set(environment.XRapidAPIKeyHeader, environment.XRapidAPIKeyValue)
      .set(environment.XRapidAPIHostHeader, environment.XRapidAPIHostValue);

    return this.http.get<WeatherData>(url, { headers });
  }
}
