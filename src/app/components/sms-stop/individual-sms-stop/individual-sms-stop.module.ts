import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualSmsStopListingComponent } from './individual-sms-stop-listing/individual-sms-stop-listing.component';
import { CreateIndividualSmsStopComponent } from './create-individual-sms-stop/create-individual-sms-stop.component';



@NgModule({
  declarations: [
    IndividualSmsStopListingComponent,
    CreateIndividualSmsStopComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IndividualSmsStopModule { }
