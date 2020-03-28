import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {
  Line,
  select,
  scaleTime,
  scaleLinear,
  extent,
  axisBottom,
  axisLeft,
  line
} from 'd3';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart: ElementRef;
  @Input() data: { x: string; y: number }[] = [
    { x: '2020', y: 100 },
    { x: '2022', y: 130 },
    { x: '2024', y: 300 }
  ];

  margin = { top: 20, right: 20, bottom: 30, left: 50 };
  width: number;
  height: number;
  x: any;
  y: any;
  svg: any;
  line: Line<[number, number]>;

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawLine();
  }

  initSvg() {
    this.svg = select(this.chart.nativeElement)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500')
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );
  }

  initAxis() {
    this.x = scaleTime().range([0, this.width]);
    this.y = scaleLinear().range([this.height, 0]);
    this.x.domain(extent(this.data, d => new Date(d.x).getTime()));
    this.y.domain(extent(this.data, d => d.y));
  }

  drawAxis() {
    this.svg
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(axisBottom(this.x));

    this.svg
      .append('g')
      .attr('class', 'axis axis--y')
      .call(axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Price ($)');
  }

  drawLine() {
    this.line = line()
      .x((d: any) => this.x(new Date(d.x).getTime()))
      .y((d: any) => this.y(d.y));

    this.svg
      .append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('d', this.line);
  }
}
