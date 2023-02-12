import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
export interface PeriodicElement {
  
  fileName: string;
  fileRefNo: number;
  mobileNoCount: number;
  smsInEng: string;
  smsInZaw: string;
  smsInUni: string;
  smsInValueDatenTime: string;
  status: string;
  view: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {fileRefNo: 20218078978293 ,fileName: 'File Name 1',mobileNoCount: 100, smsInEng: 'Hi Mingalar Pr',
   smsInZaw: 'Hi Mingalar Par in Zaw',smsInUni: 'Hi Mingalar Par in Uni',
   smsInValueDatenTime: 'Fri-08-Jun-2021, 12:10:20', status: 'Pre-Process',view:'assets/img/Icon/excel.svg'
  }
];

@Component({
  selector: 'app-custom-view-detail-action',
  templateUrl: './custom-view-detail-action.component.html',
  styleUrls: ['./custom-view-detail-action.component.scss']
})
export class CustomViewDetailActionComponent implements OnInit {
  
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  selected = '3';
  selectedUser = '1';
  

  constructor(public dialogRef: MatDialogRef<CustomViewDetailActionComponent>) { }

  ngOnInit(): void {
    this.radioBtn='Schedule';
  }

  displayedColumns: string[] = ['fileRefNo','fileName', 'mobileNoCount', 'smsInEng','smsInZaw','smsInUni','smsInValueDatenTime','status','view'];
  dataSource = ELEMENT_DATA;

  radioBtn: any;
  radios: string[] = ['Send Now', 'Schedule', 'Custom'];
  
  onDismiss(){
    this.dialogRef.close();
  }
  
  inputFormControl = new FormControl({ value: null, disabled: true });
}
