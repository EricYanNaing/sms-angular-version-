import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { OnNetOffNetComparisonChartFilterComponent } from '../../modal/on-net-off-net-comparison-chart-filter/on-net-off-net-comparison-chart-filter.component';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

export interface Color {
  name: string;
  selectable: boolean;
  group: ScaleType;
  domain: string[];
}
@Component({
  selector: 'app-on-net-off-net-comparison',
  templateUrl: './on-net-off-net-comparison.component.html',
  styleUrls: ['./on-net-off-net-comparison.component.scss']
})
export class OnNetOffNetComparisonComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialog: MatDialog) { Object.assign(this, { multi }),this.view = [innerWidth / 1.3, 600];  }

  onnetOffnetComparisonFilter() {
    this.dialog.open(OnNetOffNetComparisonChartFilterComponent, {
      width: '900px',
      data: {}
    });
  }

  ngOnInit(): void {
  }


  domain: string[] | undefined;
  single: any[] | undefined;
  multi: any[] | undefined;
  shareCost: any[] | undefined;
  

  view: [number, number] = [1400, 600];

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


  colorScheme3: Color = { domain: [
    "#05b8e3",
    "#ed1b24",], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }

  onSelect(event: any) {
    console.log(event);
  }

    onResize(event: any) {
    this.view = [event.target.innerWidth / 1.35, 600];
}
}

export var multi = [
  {
    "name": "OOREDOO",
    "series": [
      {
        "name": "On Net",
        "value": 400
      },
      {
        "name": "Off Net",
        "value": 500
      },
    ]
  },

  {
    "name": "MPT",
    "series": [
      {
        "name": "On Net",
        "value": 300
      },
      {
        "name": "Off Net",
        "value": 600
      }
    ]
  },

  {
    "name": "MYTEL",
    "series": [
      {
        "name": "On Net",
        "value": 75
      },
      {
        "name": "Off Net",
        "value": 1000
      }
    ]
  },

  {
    "name": "TELENOR",
    "series": [
      {
        "name": "On Net",
        "value": 600
      },
      {
        "name": "Off Net",
        "value": 800
      }
    ]
  },

  {
    "name": "MEC",
    "series": [
      {
        "name": "On Net",
        "value": 400
      },
      {
        "name": "Off Net",
        "value": 500
      }
    ]
  },
];