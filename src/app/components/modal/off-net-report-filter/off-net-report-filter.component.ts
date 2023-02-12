import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-off-net-report-filter',
  templateUrl: './off-net-report-filter.component.html',
  styleUrls: ['./off-net-report-filter.component.scss']
})


export class OffNetReportFilterComponent {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date()

  constructor(public dialogRef: MatDialogRef<OffNetReportFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}
