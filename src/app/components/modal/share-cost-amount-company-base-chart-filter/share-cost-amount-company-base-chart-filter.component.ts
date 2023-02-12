import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-share-cost-amount-company-base-chart-filter',
  templateUrl: './share-cost-amount-company-base-chart-filter.component.html',
  styleUrls: ['./share-cost-amount-company-base-chart-filter.component.scss']
})
export class ShareCostAmountCompanyBaseChartFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<ShareCostAmountCompanyBaseChartFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }
}
