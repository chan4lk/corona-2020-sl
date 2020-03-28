import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryResponse } from './model/country-info.response';
import { SummaryResponse } from './model/summary.response';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient) {}

  getCountryData(country = 'Sri Lanka') {
    return this.http.get<CountryResponse>(
      `https://corona.lmao.ninja/countries/${country}`
    );
  }

  getAllCountries() {
    return this.http.get<CountryResponse[]>(
      'https://corona.lmao.ninja/countries?sort=deaths'
    );
  }

  getSummary() {
    return this.http.get<SummaryResponse>('https://corona.lmao.ninja/all');
  }
}
