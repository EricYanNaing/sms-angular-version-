import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-individual-email-listing-filter',
  templateUrl: './individual-email-listing-filter.component.html',
  styleUrls: ['./individual-email-listing-filter.component.scss']
})
export class IndividualEmailListingFilterComponent  {
  
@ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<IndividualEmailListingFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }
}
