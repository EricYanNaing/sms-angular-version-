import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-individual-sms-stop-filter',
  templateUrl: './update-individual-sms-stop-filter.component.html',
  styleUrls: ['./update-individual-sms-stop-filter.component.scss']
})
export class UpdateIndividualSmsStopFilterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateIndividualSmsStopFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}
