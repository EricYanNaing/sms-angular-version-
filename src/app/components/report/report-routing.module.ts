import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SmsChannelChangeListingComponent} from './sms-channel-change/sms-channel-change-listing/sms-channel-change-listing.component';
import {OtherSmsBulkFileViewListingComponent} from './other-sms-bulk-file-view/other-sms-bulk-file-view-listing/other-sms-bulk-file-view-listing.component';
import{ OnNetReportListingComponent } from './on-net-report/on-net-report-listing/on-net-report-listing.component';
import { OffNetReportListingComponent } from './off-net-report/off-net-report-listing/off-net-report-listing.component';
import { OperatorBaseReportListingComponent } from './operator-base-report/operator-base-report-listing/operator-base-report-listing.component';
import { CompanyBaseReportListingComponent } from './company-base-report/company-base-report-listing/company-base-report-listing.component';
import { CustomSmsReportListingComponent } from './custom-sms-report/custom-sms-report-listing/custom-sms-report-listing.component';
import { OnNetReportDetailComponent } from './on-net-report/on-net-report-detail/on-net-report-detail.component';
import { OffNetReportDetailComponent } from './off-net-report/off-net-report-detail/off-net-report-detail.component';
import {OtherSmsBulkFileViewDetailComponent } from './other-sms-bulk-file-view/other-sms-bulk-file-view-detail/other-sms-bulk-file-view-detail.component';
import {OperatorBaseReportDetailComponent } from './operator-base-report/operator-base-report-detail/operator-base-report-detail.component';
import { CompanyBaseReportDetailComponent } from './company-base-report/company-base-report-detail/company-base-report-detail.component';
import {CustomSmsReportDetailComponent } from './custom-sms-report/custom-sms-report-detail/custom-sms-report-detail.component'
const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'sms-channel-change',
      component: SmsChannelChangeListingComponent
    },

    {
      path: 'other-sms-bulk-file-view',
      component: OtherSmsBulkFileViewListingComponent
    },

    {
      path: 'other-sms-bulk-file-view-detail',
      component: OtherSmsBulkFileViewDetailComponent
    },

    {
      path: 'on-net-report',
      component: OnNetReportListingComponent
    },

    {
      path: 'on-net-report-detail',
      component: OnNetReportDetailComponent
    },

    {
      path: 'off-net-report',
      component: OffNetReportListingComponent
    },

    {
      path: 'off-net-report-detail',
      component: OffNetReportDetailComponent
    },
    {
      path: 'operator-base-report',
      component: OperatorBaseReportListingComponent
    },

    {
      path: 'operator-base-report-detail',
      component: OperatorBaseReportDetailComponent
    },
    {
      path: 'company-base-report',
      component: CompanyBaseReportListingComponent
    },

    {
      path: 'company-base-report-detail',
      component: CompanyBaseReportDetailComponent
    },
    {
      path: 'custom-sms-report',
      component: CustomSmsReportListingComponent
    },

    {
      path: 'custom-sms-report-detail',
      component: CustomSmsReportDetailComponent
    },
 
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
