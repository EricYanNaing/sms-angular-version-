import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OkSmsConfigurationComponent } from './ok-sms-configuration.component';

const routes: Routes = [
  {
    path: '', 
    component: OkSmsConfigurationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OkSmsConfigurationRoutingModule { }
