import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-individual-email-detail-single',
  templateUrl: './individual-email-detail-single.component.html',
  styleUrls: ['./individual-email-detail-single.component.scss']
})
export class IndividualEmailDetailSingleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<IndividualEmailDetailSingleComponent>) { }

  selectedEmailType = "1";
  selected = "1";
  emailAddress = "1";
  subjectValue = "Promotion";

  radioBtn: any;
  radios: string[] = ['Send Now', 'Schedule', 'Custom'];

  ngOnInit(): void {
    this.radioBtn='Schedule';
  }

  onDismiss(){
    this.dialogRef.close();
  }

}
