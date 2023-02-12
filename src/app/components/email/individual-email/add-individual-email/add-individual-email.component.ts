import { Component, OnInit, ViewChild } from '@angular/core';
import {EmailAttachmentModalComponent } from 'src/app/components/modal/email-attachment-modal/email-attachment-modal.component'

import { MatDialog } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-add-individual-email',
  templateUrl: './add-individual-email.component.html',
  styleUrls: ['./add-individual-email.component.scss']
})
export class AddIndividualEmailComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(EmailAttachmentModalComponent, {
      width: '210px',
      panelClass: 'dialog-content',
      data: {}
    });
  }

  ngOnInit(): void {

  }

  deleteUpload(){
    console.log('hello');
    
    var myobj = name;
  }

  radioBtn: any;
  radios: string[] = ['Send Now', 'Schedule'];
  add_indivi_email_type:string='';

}
