import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CountryResponse } from '../core/model/country-info.response';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryInfoComponent implements OnInit {

  @Input() info: CountryResponse = null;
  constructor() { }

  ngOnInit() {}

}
