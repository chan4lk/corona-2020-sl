import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../core/model/country-info.response';
import { Observable } from 'rxjs';
import { APIService } from '../core/api.service';
import { finalize, map } from 'rxjs/operators';
import { Timeline } from '../core/model/history.response';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  info$: Observable<CountryResponse>;
  data$: Observable<{ x: any; y: number }[]>;
  history$: Observable<Timeline>;
  deaths$: Observable<{ x: string; y: number }[]>;
  cases$: Observable<{ x: string; y: number }[]>;
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.doRefresh();
  }

  doRefresh(event?: any) {
    this.info$ = this.api
      .getCountryData()
      .pipe(finalize(() => event && event.target.complete()));
    this.data$ = this.info$.pipe(
      map(info => [
        {
          x: 'COUNTRY.ACTIVE',
          y: this.getActiveInfo(info)
        },
        {
          x: 'COUNTRY.RECOVERED',
          y: this.getRecoveryInfo(info)
        },
        {
          x: 'COUNTRY.DEATHS',
          y: this.getDeathInfo(info)
        }
      ])
    );

    this.history$ = this.api
      .getHistory()
      .pipe(map(history => history.timeline));

    this.deaths$ = this.history$.pipe(
      map(timeline =>
        Object.keys(timeline.deaths).map(key => ({
          x: key,
          y: timeline.deaths[key]
        }))
      )
    );

    this.cases$ = this.history$.pipe(
      map(timeline =>
        Object.keys(timeline.cases).map(key => ({
          x: key,
          y: timeline.cases[key]
        }))
      )
    );
  }

  getDeathInfo(info: CountryResponse) {
    return (info.deaths / (info.deaths + info.active + info.recovered)) * 100;
  }

  getRecoveryInfo(info: CountryResponse) {
    return (
      (info.recovered / (info.deaths + info.active + info.recovered)) * 100
    );
  }

  getActiveInfo(info: CountryResponse) {
    return (info.active / (info.deaths + info.active + info.recovered)) * 100;
  }
}
