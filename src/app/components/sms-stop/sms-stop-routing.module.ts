import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ BulkSmsStopListingComponent} from './bulk-sms-stop/bulk-sms-stop-listing/bulk-sms-stop-listing.component';
import{CreateBulkSmsStopComponent } from './bulk-sms-stop/create-bulk-sms-stop/create-bulk-sms-stop.component';
import {IndividualSmsStopListingComponent} from './individual-sms-stop/individual-sms-stop-listing/individual-sms-stop-listing.component';
import{CreateIndividualSmsStopComponent } from './individual-sms-stop/create-individual-sms-stop/create-individual-sms-stop.component'
const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'bulk-sms-stop-listing',
      component: BulkSmsStopListingComponent
    },

    {
      path: 'create-bulk-sms-stop',
      component:CreateBulkSmsStopComponent
    },

    {
      path: 'individual-sms-stop-listing',
      component: IndividualSmsStopListingComponent
    },
   
    {
      path: 'create-individual-sms-stop',
      component: CreateIndividualSmsStopComponent
    },
   
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsStopRoutingModule { }
