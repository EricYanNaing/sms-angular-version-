import { Component, OnInit, ViewChild } from '@angular/core';
import {LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

export interface Color {
  name: string;
  selectable: boolean;
  group: ScaleType;
  domain: string[];
}


export interface PeriodicElement {
  headerText: string;
  ooredooOnnet: string;
  ooredooOffnet: string;
  mptOnnet: string;
  mptOffnet: string;
  mytelOnnet: string;
  mytelOffnet: string;
  telenorOnnet: string;
  telenorOffnet: string;
  mecOnnet: string;
  mecOffnet: string;
  total: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {headerText: 'Amount',ooredooOnnet: '100,000', ooredooOffnet: '10,000',mptOnnet: '250,000', mptOffnet: '75,000',mytelOnnet: '500,000',
   mytelOffnet: '100,000',telenorOnnet: '500,000', telenorOffnet: '100,000',mecOnnet: '75,000', mecOffnet: '10,000', total: '17,200,000' },
   {headerText: 'SMS Count',ooredooOnnet: '500', ooredooOffnet: '100',mptOnnet: '200', mptOffnet: '700',mytelOnnet: '500',
   mytelOffnet: '1,000',telenorOnnet: '900', telenorOffnet: '100',mecOnnet: '100', mecOffnet: '700', total: '12,900' },
];
@Component({
  selector: 'app-custom-onnet-offnet-operator-detail',
  templateUrl: './custom-onnet-offnet-operator-detail.component.html',
  styleUrls: ['./custom-onnet-offnet-operator-detail.component.scss']
})
export class CustomOnnetOffnetOperatorDetailComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  displayedColumns: string[] = ['headerText','ooredooOnnet', 'ooredooOffnet','mptOnnet', 'mptOffnet','mytelOnnet', 'mytelOffnet',
  'telenorOnnet', 'telenorOffnet','mecOnnet', 'mecOffnet', 'total',];
  dataSource = ELEMENT_DATA;

  constructor() { Object.assign(this, { multi }),this.view = [innerWidth / 1.3, 600];  }

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
        "value": 100000
      },
      {
        "name": "Off Net",
        "value": 10000
      },
    ]
  },

  {
    "name": "MPT",
    "series": [
      {
        "name": "On Net",
        "value": 250000
      },
      {
        "name": "Off Net",
        "value": 75000
      }
    ]
  },

  {
    "name": "MYTEL",
    "series": [
      {
        "name": "On Net",
        "value": 500000
      },
      {
        "name": "Off Net",
        "value": 100000
      }
    ]
  },

  {
    "name": "TELENOR",
    "series": [
      {
        "name": "On Net",
        "value": 500000
      },
      {
        "name": "Off Net",
        "value": 50000
      }
    ]
  },

  {
    "name": "MEC",
    "series": [
      {
        "name": "On Net",
        "value": 75000
      },
      {
        "name": "Off Net",
        "value": 10000
      }
    ]
  },
];
