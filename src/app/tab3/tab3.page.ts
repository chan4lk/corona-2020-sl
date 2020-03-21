import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryResponse } from '../core/model/country-info.response';
import { APIService } from '../core/api.service';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  info$: Observable<CountryResponse> = of({
    active: 0,
    cases: 0,
    casesPerOneMillion: 0,
    country: '',
    critical: 0,
    deaths: 0,
    recovered: 0,
    todayCases: 0,
    todayDeaths: 0
  });
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.doRefresh();
  }

  doRefresh(event?: any) {
    this.info$ = this.api.getAllCountries().pipe(
      map(counties => {
        const init: CountryResponse = {
          active: 0,
          cases: 0,
          casesPerOneMillion: 0,
          country: '',
          critical: 0,
          deaths: 0,
          recovered: 0,
          todayCases: 0,
          todayDeaths: 0
        };
        return counties.reduce((previous, current) => {
          return {
            cases: previous.cases + current.cases,
            active: previous.active + current.active,
            todayDeaths: previous.todayDeaths + current.todayDeaths,
            todayCases: previous.todayCases + current.todayCases,
            deaths: previous.deaths + current.deaths,
            recovered: previous.recovered + current.recovered,
            critical: previous.critical + current.critical
          } as CountryResponse;
        }, init);
      }),
      finalize(() => event ? event.target.complete() : null)
    );
  }
}
