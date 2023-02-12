import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomViewDetailActionComponent } from '../modal/custom-view-detail-action/custom-view-detail-action.component';
import { ScheduleViewDetailActionComponent } from '../modal/schedule-view-detail-action/schedule-view-detail-action.component';
import { CustomViewDetailComponent } from './custom-view-detail/custom-view-detail.component';
import { ScheduleViewDetailComponent } from './schedule-view-detail/schedule-view-detail.component';
import { SendOtherSmsConfigurationComponent } from './send-other-sms/send-other-sms-configuration/send-other-sms-configuration.component';
import { SugarMillFactoryConfigurationComponent } from './sugar-mill-factory/sugar-mill-factory-configuration/sugar-mill-factory-configuration.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'send-other-sms',
      component: SendOtherSmsConfigurationComponent
    },
    {
      path: 'sugar-mill-factory',
      component: SugarMillFactoryConfigurationComponent
    },
    {
      path: 'schedule-view-detail',
      component: ScheduleViewDetailComponent
    },
    {
      path: 'custom-view-detail',
      component: CustomViewDetailComponent
    },
    {
      path: 'custom-view-detail-action',
      component: CustomViewDetailActionComponent
    },
    {
      path: 'schedule-view-detail-action',
      component: ScheduleViewDetailActionComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherSmsRoutingModule { }
