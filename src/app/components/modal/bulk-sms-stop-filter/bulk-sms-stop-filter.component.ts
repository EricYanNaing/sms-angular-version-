import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-bulk-sms-stop-filter',
  templateUrl: './bulk-sms-stop-filter.component.html',
  styleUrls: ['./bulk-sms-stop-filter.component.scss']
})
export class BulkSmsStopFilterComponent {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<BulkSmsStopFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}

