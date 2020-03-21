import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../core/model/country-info.response';
import { Observable } from 'rxjs';
import { APIService } from '../core/api.service';
import { tap, finalize } from "rxjs/operators";
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

  doRefresh(event: any){
    this.info$ = this.api.getCountryData().pipe(finalize(() => event.target.complete()));
  }
}
