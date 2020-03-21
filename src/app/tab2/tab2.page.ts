import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../core/model/country-info.response';
import { APIService } from '../core/api.service';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  countries$: Observable<CountryResponse[]> = of([]);
  constructor(private api: APIService) {}

  ngOnInit(): void {
    this.countries$ = this.api.getAllCountries();
  }

  doRefresh(event: any){
    this.countries$ = this.api.getAllCountries().pipe(finalize(() => event.target.complete()));
  }

}
