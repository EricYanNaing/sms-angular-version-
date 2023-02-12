import {OnInit, Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-operator-base-report-filter',
  templateUrl: './operator-base-report-filter.component.html',
  styleUrls: ['./operator-base-report-filter.component.scss']
})
export class OperatorBaseReportFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date()

  constructor(public dialogRef: MatDialogRef<OperatorBaseReportFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}
