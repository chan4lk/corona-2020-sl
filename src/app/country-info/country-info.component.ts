import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CountryResponse } from '../core/model/country-info.response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInfoComponent implements OnInit {
  @Input() info: CountryResponse = {
    active: 0,
    cases: 0,
    casesPerOneMillion: 0,
    country: '',
    critical: 0,
    deaths: 0,
    recovered: 0,
    todayCases: 0,
    todayDeaths: 0,
    tests: 0,
    countryInfo: {
      flag: '',
    },
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  gotoDetails() {
    this.router.navigate([`/tabs/details/${this.info.country}`]);
  }
}
