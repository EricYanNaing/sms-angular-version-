import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-company-base-report-filter',
  templateUrl: './company-base-report-filter.component.html',
  styleUrls: ['./company-base-report-filter.component.scss']
})


export class CompanyBaseReportFilterComponent {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date()

  constructor(public dialogRef: MatDialogRef<CompanyBaseReportFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }

}
