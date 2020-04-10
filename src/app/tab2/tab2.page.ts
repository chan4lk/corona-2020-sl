import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountryResponse } from '../core/model/country-info.response';
import { APIService } from '../core/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {
  countries: CountryResponse[] = [];
  visibleCountries: CountryResponse[] = [];
  loading = true;
  count = 0;
  sub: Subscription;
  filter = '';
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.doRefresh();
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }

  doRefresh(event?: any) {
    this.loading = true;
    this.count = 0;
    this.sub = this.api.getAllCountries().subscribe(countries => {
      if (this.sub) {
        this.sub.unsubscribe();
      }
      this.loading = false;
      this.countries = countries;
      if (event) {
        event.target.complete();
      }
      this.visibleCountries = [];
      this.append(null);
    });
  }

  search(event: CustomEvent) {
    this.filter = event.detail.value || '';
    if (this.filter.length === 0) {
      this.doRefresh();
    } else {
      this.count = 0;
      this.visibleCountries = [];
      this.append(null);
    }
  }

  append(event: any) {
    const toAppend = this.countries
      .filter(c =>
        c.country.toLowerCase().startsWith(this.filter.toLowerCase())
      )
      .slice(this.count * 10, (this.count + 1) * 10);
    if (event) {
      event.target.complete();
    }
    this.count++;
    this.visibleCountries.push(...toAppend);
    if (this.countries.length === this.visibleCountries.length && event) {
      event.target.disable = true;
    }
  }
}
