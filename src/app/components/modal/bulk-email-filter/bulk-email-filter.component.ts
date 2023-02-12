import { Component,HostListener, ViewChild  , ViewEncapsulation } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-bulk-email-filter',
  templateUrl: './bulk-email-filter.component.html',
  styleUrls: ['./bulk-email-filter.component.scss']
})
export class BulkEmailFilterComponent {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<BulkEmailFilterComponent>) { }

  ngOnInit(): void {
  }
  onDismiss(){
    this.dialogRef.close();
  }
}
