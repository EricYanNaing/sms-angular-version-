import { Component, OnInit, ViewChild } from '@angular/core';
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
   smsInZaw: 'ဟိုင္း မဂၤလာပါ',smsInUni: 'ဟိုင်း မင်္ဂလာပါ',
   smsInValueDatenTime: 'Fri-08-Jun-2021, 12:10:20', status: 'Pre-Process',view:'assets/img/Icon/excel.svg'
  }
];
@Component({
  selector: 'app-send-other-sms-configuration',
  templateUrl: './send-other-sms-configuration.component.html',
  styleUrls: ['./send-other-sms-configuration.component.scss']
})
export class SendOtherSmsConfigurationComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  mobileNumberFields = [
    {
      mobileNumberValue: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['fileRefNo','fileName', 'mobileNoCount', 'smsInEng','smsInZaw','smsInUni','smsInValueDatenTime','status','view'];
  dataSource = ELEMENT_DATA;

  radioBtn: any;
  radios: string[] = ['Send Now', 'Schedule', 'Custom'];
  send_other_sms:string='';


  addMobile(){
    const mobileNumberFieldsObject =  {
      mobileNumberValue: ""
    }
    if (this.mobileNumberFields.length < 5) {
      this.mobileNumberFields.push(mobileNumberFieldsObject);
    }
  }

  deleteMobile(row: any){
    if (this.mobileNumberFields.length < 2) {
      return;
    }

    const indexToDelete = this.mobileNumberFields.indexOf(row);
    this.mobileNumberFields.splice(indexToDelete, 1);
  }

}
