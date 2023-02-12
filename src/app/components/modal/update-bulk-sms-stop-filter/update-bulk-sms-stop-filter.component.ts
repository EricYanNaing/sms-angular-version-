import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-bulk-sms-stop-filter',
  templateUrl: './update-bulk-sms-stop-filter.component.html',
  styleUrls: ['./update-bulk-sms-stop-filter.component.scss']
})
export class UpdateBulkSmsStopFilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateBulkSmsStopFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}