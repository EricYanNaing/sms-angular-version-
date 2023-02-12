import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { OffNetChartFilterComponent } from '../../modal/off-net-chart-filter/off-net-chart-filter.component';
import { OperatorFilterComponent } from '../../modal/operator-filter/operator-filter.component';

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

export interface PeriodicElement1 {
  blank: string;
  count1: string;
  amount1: string;
  totalAmt: string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  {blank: 'On Net', count1: '600', amount1: '180,000', totalAmt: '250,000' },
  {blank: 'Off Net', count1: '400', amount1: '120,00',totalAmt:'' },
];

@Component({
  selector: 'app-oredoo-offnet-pie-chart',
  templateUrl: './oredoo-offnet-pie-chart.component.html',
  styleUrls: ['./oredoo-offnet-pie-chart.component.scss']
})
export class OredooOffnetPieChartComponent implements OnInit {

  
  constructor(public dialog: MatDialog) { Object.assign(this, { single }),Object.assign(this, { cgmOffnet }) }
  
  displayedColumns: string[] = ['operator', 'count', 'amount'];
  dataSource = ELEMENT_DATA;

  displayedColumns1: string[] = ['blank','count1','amount1','totalAmt'];
  dataSource1 = ELEMENT_DATA1;


  domain: string[] | undefined;
  single: any[] | undefined;
  cgmOffnet: any[] | undefined;
  



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


  //pie
  showLabels = true;

  colorScheme: Color = { domain: [
  "#ed1b24",
  "#f9bb0e",
  "#ee6c20",
  "#05b8e3",
  "#3a7eed"], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }

  cgmOffnetColor: Color = { domain: [
      "#800000",
      "#ed1b24",], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }


  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

  offnetFilter() {
    this.dialog.open(OffNetChartFilterComponent, {
      width: '900px',
      data: {}
    });
  }

  operatorFilter() {
    this.dialog.open(OperatorFilterComponent, {
      width: '900px',
      data: {}
    });
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

export var cgmOffnet = [
  {
    "name": "Off Net",
    "value": 600
  },
  {
    "name": "On Net",
    "value": 400
  },
];
