import { Component, OnInit, Input } from '@angular/core';

export const StatsPieChart: any[] = [
  { x: 'මරණ', y: 2704659 },
  { x: 'සුව වුවන්', y: 4499890 },
  { x: 'රෝගීන්', y: 2159981 }
];

import {
  quantize,
  interpolateSpectral,
  scaleOrdinal,
  arc,
  pie,
  select
} from 'd3';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() data: { x: string; y: number }[] = [];
  margin = { top: 20, right: 20, bottom: 30, left: 50 };
  width: number;
  height: number;
  radius: number;

  arc: any;
  labelArc: any;
  pie: any;
  color: any;
  svg: any;

  constructor(private translate: TranslateService) {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  ngOnInit() {
    this.initSvg();
    this.drawPie();
  }

  initSvg() {
    this.color = scaleOrdinal()
      .domain(this.data.map(d => d.x))
      .range(
        quantize(
          t => interpolateSpectral(t * 0.8 + 0.1),
          this.data.length
        ).reverse()
      );
    this.arc = arc()
      .outerRadius(this.radius - 10)
      .innerRadius(0);
    this.labelArc = arc()
      .outerRadius(this.radius - 40)
      .innerRadius(this.radius - 40);
    this.pie = pie()
      .sort(null)
      .value((d: any) => d.y);
    this.svg = select('#pieChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr(
        'viewBox',
        '0 0 ' +
          Math.min(this.width, this.height) +
          ' ' +
          Math.min(this.width, this.height)
      )
      .append('g')
      .attr(
        'transform',
        'translate(' +
          Math.min(this.width, this.height) / 2 +
          ',' +
          Math.min(this.width, this.height) / 2 +
          ')'
      );
  }

  drawPie() {
    const g = this.svg
      .selectAll('.arc')
      .data(this.pie(this.data))
      .enter()
      .append('g')
      .attr('class', 'arc');
    g.append('path')
      .attr('d', this.arc)
      .style('fill', (d: any) => this.color(d.data.x));
    g.append('text')
      .attr(
        'transform',
        (d: any) => 'translate(' + this.labelArc.centroid(d) + ')'
      )
      .attr('dy', '.35em')
      .text((d: any) => this.translate.instant(d.data.x));
  }
}
