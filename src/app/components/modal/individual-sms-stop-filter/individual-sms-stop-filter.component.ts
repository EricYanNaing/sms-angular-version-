import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-individual-sms-stop-filter',
  templateUrl: './individual-sms-stop-filter.component.html',
  styleUrls: ['./individual-sms-stop-filter.component.scss']
})
export class IndividualSmsStopFilterComponent {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();


  constructor(public dialogRef: MatDialogRef<IndividualSmsStopFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}
