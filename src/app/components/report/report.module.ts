import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { SmsChannelChangeListingComponent } from './sms-channel-change/sms-channel-change-listing/sms-channel-change-listing.component';
import { OtherSmsBulkFileViewListingComponent } from './other-sms-bulk-file-view/other-sms-bulk-file-view-listing/other-sms-bulk-file-view-listing.component';
import { OnNetReportListingComponent } from './on-net-report/on-net-report-listing/on-net-report-listing.component';
import { OffNetReportListingComponent } from './off-net-report/off-net-report-listing/off-net-report-listing.component';
import { OperatorBaseReportListingComponent } from './operator-base-report/operator-base-report-listing/operator-base-report-listing.component';
import { CustomSmsReportListingComponent } from './custom-sms-report/custom-sms-report-listing/custom-sms-report-listing.component';
import { CompanyBaseReportListingComponent } from './company-base-report/company-base-report-listing/company-base-report-listing.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OnNetReportDetailComponent } from './on-net-report/on-net-report-detail/on-net-report-detail.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { OffNetReportDetailComponent } from './off-net-report/off-net-report-detail/off-net-report-detail.component';
import { OtherSmsBulkFileViewDetailComponent } from './other-sms-bulk-file-view/other-sms-bulk-file-view-detail/other-sms-bulk-file-view-detail.component';
import { OperatorBaseReportDetailComponent } from './operator-base-report/operator-base-report-detail/operator-base-report-detail.component';
import { CompanyBaseReportDetailComponent } from './company-base-report/company-base-report-detail/company-base-report-detail.component';
import { CustomSmsReportDetailComponent } from './custom-sms-report/custom-sms-report-detail/custom-sms-report-detail.component';
@NgModule({
  declarations: [
    SmsChannelChangeListingComponent,
    OtherSmsBulkFileViewListingComponent,
    OnNetReportListingComponent,
    OffNetReportListingComponent,
    OperatorBaseReportListingComponent,
    CustomSmsReportListingComponent,
    CompanyBaseReportListingComponent,
    OnNetReportDetailComponent,
    OffNetReportDetailComponent,
    OtherSmsBulkFileViewDetailComponent,
    OperatorBaseReportDetailComponent,
    CompanyBaseReportDetailComponent,
    CustomSmsReportDetailComponent,
 
    

  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BsDatepickerModule.forRoot()
  ]
})
export class ReportModule {
  
 }
