import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-off-net-chart-filter',
  templateUrl: './off-net-chart-filter.component.html',
  styleUrls: ['./off-net-chart-filter.component.scss']
})
export class OffNetChartFilterComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<OffNetChartFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
}
