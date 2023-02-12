import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{SmsWhiteListListingComponent} from './sms-white-list-listing/sms-white-list-listing.component';
import{FilterSmsWhiteListComponent} from './filter-sms-white-list/filter-sms-white-list.component'

const routes: Routes = [

  {
    path:'',
    component:  SmsWhiteListListingComponent
  },

  {
    path:'filter-sms-white-list',
    component: FilterSmsWhiteListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsWhiteListRoutingModule {

 }
