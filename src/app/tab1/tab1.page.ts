import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../core/model/country-info.response';
import { Observable } from 'rxjs';
import { APIService } from '../core/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  info$: Observable<CountryResponse>;
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.info$ = this.api.getCountryData();
  }
}
