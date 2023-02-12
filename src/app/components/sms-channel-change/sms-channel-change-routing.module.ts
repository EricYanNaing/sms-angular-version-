import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ SmsChannelListingComponent} from  '../sms-channel-change/sms-channel-listing/sms-channel-listing.component';
import{ CreateSmsChannelComponent }from '../sms-channel-change/create-sms-channel/create-sms-channel.component';
const routes: Routes = [
  {
    path:'',
    component:SmsChannelListingComponent  
  },

  {
    path:'create-sms-channel',
    component: CreateSmsChannelComponent
  },
  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsChannelChangeRoutingModule { }
