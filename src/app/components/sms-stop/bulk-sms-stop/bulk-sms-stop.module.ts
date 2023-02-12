import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkSmsStopListingComponent } from './bulk-sms-stop-listing/bulk-sms-stop-listing.component';
import { CreateBulkSmsStopComponent } from './create-bulk-sms-stop/create-bulk-sms-stop.component';


@NgModule({
  declarations: [
    BulkSmsStopListingComponent,
    CreateBulkSmsStopComponent,
    
  ],
  imports: [
    CommonModule,
  ]
})
export class BulkSmsStopModule { }
