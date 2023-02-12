import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { MatDialog } from '@angular/material/dialog';
import { ShareCostAmountCompanyBaseChartFilterComponent } from '../../modal/share-cost-amount-company-base-chart-filter/share-cost-amount-company-base-chart-filter.component';
import {Router} from '@angular/router';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

export interface Color {
  name: string;
  selectable: boolean;
  group: ScaleType;
  domain: string[];
}
@Component({
  selector: 'app-share-cost-amount-company-base',
  templateUrl: './share-cost-amount-company-base.component.html',
  styleUrls: ['./share-cost-amount-company-base.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ShareCostAmountCompanyBaseComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialog: MatDialog, private router: Router) { Object.assign(this, { shareCost }),this.view = [innerWidth / 1.3, 600]; }

  shareCostAmountCompanyBaseFilter() {
    this.dialog.open(ShareCostAmountCompanyBaseChartFilterComponent, {
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


  view: [number, number] = [200, 200];

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

  //pie
  showLabels = true;

  colorScheme2: Color = { domain: [
    "#ff0f10",
    "#f6c600",
    "#9702fe",
    "#09ff38",
    "#ffe401",
    "#c2342a",
    "#2654ff"], group: ScaleType.Ordinal, selectable: true, name: 'Customer Usage', }

  onSelect(event: any) {
          if (event.name=="CGM"){
            this.router.navigate(['/dashboard/cgm-onnet-offnet-bar']);
          }
    else if (event.name=="OK$"){
      this.router.navigate(['/dashboard/ok-bar']);
    }
    else if (event.name=="One Stop Mart"){
      this.router.navigate(['/dashboard/oneStopMart-bar']);
    }
    else if (event.name=="Sugar Mill"){
      this.router.navigate(['/dashboard/sugarMillFactory-bar']);
    }
    else if (event.name=="OK Taxi"){
      this.router.navigate(['/dashboard/okTaxi-bar']);
    }
    else if (event.name=="GAT"){
      this.router.navigate(['/dashboard/gat-bar']);
    }else{
      this.router.navigate(['/dashboard/custom-bar']);
    }
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.35, 600];
}

}


export var shareCost = [
  {
    "name": "CGM",
    "value": 1000000
  },
  {
    "name": "OK$",
    "value": 500000
  },
  {
    "name": "One Stop Mart",
    "value": 250000
  },
  {
    "name": "Sugar Mill",
    "value": 200000
  },
  {
    "name": "OK Taxi",
    "value": 100000
  },
  {
    "name": "GAT",
    "value": 90000
  },
  {
    "name": "Custom",
    "value": 75000
  },
];
