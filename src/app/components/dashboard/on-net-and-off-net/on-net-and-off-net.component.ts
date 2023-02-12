import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { OffNetChartFilterComponent } from '../../modal/off-net-chart-filter/off-net-chart-filter.component';
import { OnNetChartFilterComponent } from '../../modal/on-net-chart-filter/on-net-chart-filter.component';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

export interface Color {
  name: string;
  selectable: boolean;
  group: ScaleType;
  domain: string[];
}

export interface PeriodicElement {
  operator: string;
  count: number;
  amount: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {operator: 'OOREDOO', count: 500, amount: '250,000' },
  {operator: 'MPT', count: 200, amount: '100,000' },
  {operator: 'MYTEL', count: 400, amount: '200,000'},
  {operator: 'TELENOR', count: 800, amount: '450,000' },
  {operator: 'MEC', count: 600, amount: '420,000' },
];
@Component({
  selector: 'app-on-net-and-off-net',
  templateUrl: './on-net-and-off-net.component.html',
  styleUrls: ['./on-net-and-off-net.component.scss']
})
export class OnNetAndOffNetComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialog: MatDialog) { Object.assign(this, { single }) }
  
  onnetFilter() {
    this.dialog.open(OnNetChartFilterComponent, {
      width: '900px',
      data: {}
    });
  }

  offnetFilter() {
    this.dialog.open(OffNetChartFilterComponent, {
      width: '900px',
      data: {}
    });
  }

  displayedColumns: string[] = ['operator', 'count', 'amount'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

  domain: string[] | undefined;
  single: any[] | undefined;
  multi: any[] | undefined;
  shareCost: any[] | undefined;
  


 // options for the chart
 showXAxis = true;
 showYAxis = true;
 gradient = false;
 showLegend = true;
 showXAxisLabel = true;
 xAxisLabel = 'Country';
 showYAxisLabel = true;
 yAxisLabel = 'Amount';
 timeline = true;
 legendTitle = '';
 below = LegendPosition.Below;

 view: [number, number] = [400, 400];
  //pie
  showLabels = true;

  colorScheme: Color = { domain: [
  "#ed1b24",
  "#f9bb0e",
  "#ee6c20",
  "#05b8e3",
  "#3a7eed"], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }

  colorScheme2: Color = { domain: [
    "#ff0f10",
    "#f6c600",
    "#9702fe",
    "#09ff38",
    "#ffe401",
    "#c2342a",
    "#2654ff"], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }

    colorScheme3: Color = { domain: [
      "#05b8e3",
      "#ed1b24",], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }


  onSelect(event: any) {
    console.log(event);
  }

  

}

export var single = [
  {
    "name": "Ooredoo",
    "value": 500
  },
  {
    "name": "MPT",
    "value": 200
  },
  {
    "name": "Mytel",
    "value": 400
  },
  {
    "name": "Telenor",
    "value": 800
  },
  {
    "name": "MEC",
    "value": 600
  },
];
