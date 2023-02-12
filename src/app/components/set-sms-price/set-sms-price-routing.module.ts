import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ SetSmsPriceListingComponent} from  '../set-sms-price/set-sms-price-listing/set-sms-price-listing.component';

const routes: Routes = [

  {
    path:'',
    component:  SetSmsPriceListingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetSmsPriceRoutingModule { }
