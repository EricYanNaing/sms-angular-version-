import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-bulk-email-detail-single',
  templateUrl: './bulk-email-detail-single.component.html',
  styleUrls: ['./bulk-email-detail-single.component.scss']
})
export class BulkEmailDetailSingleComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<BulkEmailDetailSingleComponent>) { }

  ngOnInit(): void {
    this.radioBtn='Schedule';
  }

  selectedEmailType = "1";
  selected = "1";
  emailAddress = "1";
  subjectValue = "Promotion";

  radioBtn: any;
  radios: string[] = ['Send Now', 'Schedule'];
  add_bulk_email_type:string='';


  onDismiss(){
    this.dialogRef.close();
  }
}
