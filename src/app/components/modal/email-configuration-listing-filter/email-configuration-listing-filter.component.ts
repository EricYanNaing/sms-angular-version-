import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-configuration-listing-filter',
  templateUrl: './email-configuration-listing-filter.component.html',
  styleUrls: ['./email-configuration-listing-filter.component.scss']
})
export class EmailConfigurationListingFilterComponent {




@ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();
 
  constructor(public dialogRef: MatDialogRef<EmailConfigurationListingFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

}

