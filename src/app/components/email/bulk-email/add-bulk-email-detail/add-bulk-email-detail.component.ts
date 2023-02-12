import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { EmailAttachmentModalComponent } from 'src/app/components/modal/email-attachment-modal/email-attachment-modal.component';

@Component({
  selector: 'app-add-bulk-email-detail',
  templateUrl: './add-bulk-email-detail.component.html',
  styleUrls: ['./add-bulk-email-detail.component.scss']
})
export class AddBulkEmailDetailComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(EmailAttachmentModalComponent, {
      width: '210px',
      panelClass: 'dialog-content',
      data: {}
    });
  }
  ngOnInit(): void {
  }

  radioBtn: any;
  radios: string[] = ['Send Now', 'Schedule'];
  add_bulk_email_type:string='';

  url = '';

  onSelectFile(e:any){
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

}
