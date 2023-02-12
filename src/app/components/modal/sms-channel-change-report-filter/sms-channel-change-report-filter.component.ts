import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-sms-channel-change-report-filter',
  templateUrl: './sms-channel-change-report-filter.component.html',
  styleUrls: ['./sms-channel-change-report-filter.component.scss']
})
export class SmsChannelChangeReportFilterComponent {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date()


  constructor(public dialogRef: MatDialogRef<SmsChannelChangeReportFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}

