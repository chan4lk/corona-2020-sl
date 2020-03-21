import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryResponse } from './model/country-info.response';

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
}
