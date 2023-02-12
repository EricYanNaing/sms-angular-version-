import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-on-net-chart-filter',
  templateUrl: './on-net-chart-filter.component.html',
  styleUrls: ['./on-net-chart-filter.component.scss']
})
export class OnNetChartFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();
  
  constructor(public dialogRef: MatDialogRef<OnNetChartFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}
