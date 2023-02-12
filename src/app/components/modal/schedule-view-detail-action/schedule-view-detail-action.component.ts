import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-schedule-view-detail-action',
  templateUrl: './schedule-view-detail-action.component.html',
  styleUrls: ['./schedule-view-detail-action.component.scss']
})
export class ScheduleViewDetailActionComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();
  
  mobileNumberFields = [
    {
      mobileNumberValue: ""
    }
  ]

  sugar_mill_factory:string='';
  selected = '3';
  selectedSMSType = '1';
  inputFormControl = new FormControl({ value: null, disabled: true });
  radioBtn: any;
  radios: string[] = ['Send Now', 'Schedule', 'Custom'];

  constructor(public dialogRef: MatDialogRef<ScheduleViewDetailActionComponent>) { }

  ngOnInit(): void {
    this.radioBtn='Schedule';
  }

  onDismiss(){
    this.dialogRef.close();
  }



}
