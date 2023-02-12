import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-schedule-view-detail-filter',
  templateUrl: './schedule-view-detail-filter.component.html',
  styleUrls: ['./schedule-view-detail-filter.component.scss']
})
export class ScheduleViewDetailFilterComponent{
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<ScheduleViewDetailFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
}
