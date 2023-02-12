import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-on-net-off-net-comparison-chart-filter',
  templateUrl: './on-net-off-net-comparison-chart-filter.component.html',
  styleUrls: ['./on-net-off-net-comparison-chart-filter.component.scss']
})
export class OnNetOffNetComparisonChartFilterComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<OnNetOffNetComparisonChartFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
}
