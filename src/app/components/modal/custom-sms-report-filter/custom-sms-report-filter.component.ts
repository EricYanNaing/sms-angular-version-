import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-custom-sms-report-filter',
  templateUrl: './custom-sms-report-filter.component.html',
  styleUrls: ['./custom-sms-report-filter.component.scss']
})

export class CustomSmsReportFilterComponent {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date()


  constructor(public dialogRef: MatDialogRef<CustomSmsReportFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}
