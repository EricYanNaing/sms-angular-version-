import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-on-net-report-filter',
  templateUrl: './on-net-report-filter.component.html',
  styleUrls: ['./on-net-report-filter.component.scss']
})
export class OnNetReportFilterComponent{
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date()

  constructor(public dialogRef: MatDialogRef<OnNetReportFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}
