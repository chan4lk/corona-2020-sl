import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { multi } from './data';
import { APIService } from '../core/api.service';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Timeline } from '../core/model/history.response';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy {
  params: Params;

  multi: any[];
  view: any[] = [700, 300];

  // options
  legend = false;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Count';
  timeline = true;

  colorScheme = {
    domain: ['#E44D25', '#CFC0BB', '#5AA454', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  history$: Observable<Timeline>;
  deaths$: Observable<{ name: string; value: number }[]>;
  cases$: Observable<{ name: string; value: number }[]>;
  country = '';
  destroy$ = new Subject();
  constructor(
    private route: ActivatedRoute,
    private api: APIService,
    private translate: TranslateService
  ) {
    Object.assign(this, { multi });
  }

  ngOnInit() {
    this.params = this.route.snapshot.params;
    this.country = this.params.id;

    this.xAxisLabel = this.translate.instant('DETAILS.DATE');
    this.yAxisLabel = this.translate.instant('DETAILS.COUNT');

    this.api
      .getHistory(this.country)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.multi = [
          {
            name: this.translate.instant('DETAILS.DEATHS'),
            series: Object.keys(data.timeline.deaths).map((name) => ({
              name,
              value: data.timeline.deaths[name],
            })),
          },
          {
            name: this.translate.instant('DETAILS.CASES'),
            series: Object.keys(data.timeline.cases).map((name) => ({
              name,
              value: data.timeline.cases[name],
            })),
          },
          {
            name: this.translate.instant('DETAILS.RECOVERED'),
            series: Object.keys(data.timeline.recovered).map((name) => ({
              name,
              value: data.timeline.recovered[name],
            })),
          },
        ];
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
