import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReqInterceptor } from './core/interceptor/req-interceptor.service';
import { UserRolePermissionFilterComponent } from './components/modal/user-role-permission-filter/user-role-permission-filter.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from "@angular/material/toolbar";
import { BulkSmsStopFilterComponent } from './components/modal/bulk-sms-stop-filter/bulk-sms-stop-filter.component';
import { IndividualSmsStopFilterComponent } from './components/modal/individual-sms-stop-filter/individual-sms-stop-filter.component';
import { CustomViewDetailFilterComponent } from './components/modal/custom-view-detail-filter/custom-view-detail-filter.component';
import { ScheduleViewDetailFilterComponent } from './components/modal/schedule-view-detail-filter/schedule-view-detail-filter.component';
import { UpdateBulkSmsStopFilterComponent } from './components/modal/update-bulk-sms-stop-filter/update-bulk-sms-stop-filter.component';
import { UpdateIndividualSmsStopFilterComponent } from './components/modal/update-individual-sms-stop-filter/update-individual-sms-stop-filter.component';
import { EmailConfigurationListingFilterComponent } from './components/modal/email-configuration-listing-filter/email-configuration-listing-filter.component';
import { IndividualEmailListingFilterComponent } from './components/modal/individual-email-listing-filter/individual-email-listing-filter.component';
import { BulkEmailFilterComponent } from './components/modal/bulk-email-filter/bulk-email-filter.component';
import { SmsChannelChangeReportFilterComponent } from './components/modal/sms-channel-change-report-filter/sms-channel-change-report-filter.component';
import { OnNetReportFilterComponent } from './components/modal/on-net-report-filter/on-net-report-filter.component';
import { OffNetReportFilterComponent } from './components/modal/off-net-report-filter/off-net-report-filter.component';
import { OperatorBaseReportFilterComponent } from './components/modal/operator-base-report-filter/operator-base-report-filter.component';
import { CompanyBaseReportFilterComponent } from './components/modal/company-base-report-filter/company-base-report-filter.component';
import { CustomSmsReportFilterComponent } from './components/modal/custom-sms-report-filter/custom-sms-report-filter.component';
import { ConfirmAlertComponent } from './components/modal/confirm-alert/confirm-alert.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmailAttachmentModalComponent } from './components/modal/email-attachment-modal/email-attachment-modal.component';
import { OperatorFilterComponent } from './components/modal/operator-filter/operator-filter.component';
import { BulkEmailDetailSingleComponent } from './components/modal/bulk-email-detail-single/bulk-email-detail-single.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { IndividualEmailDetailSingleComponent } from './components/modal/individual-email-detail-single/individual-email-detail-single.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRolePermissionFilterComponent,
    BulkSmsStopFilterComponent,
    IndividualSmsStopFilterComponent,
    CustomViewDetailFilterComponent,
    ScheduleViewDetailFilterComponent,
    UpdateBulkSmsStopFilterComponent,
    UpdateIndividualSmsStopFilterComponent,
    EmailConfigurationListingFilterComponent,
    IndividualEmailListingFilterComponent,
    BulkEmailFilterComponent,
    SmsChannelChangeReportFilterComponent,
    OnNetReportFilterComponent,
    OffNetReportFilterComponent,
    OperatorBaseReportFilterComponent,
    CompanyBaseReportFilterComponent,
    CustomSmsReportFilterComponent,
    ConfirmAlertComponent,
    EmailAttachmentModalComponent,
    OperatorFilterComponent,
    BulkEmailDetailSingleComponent,
    IndividualEmailDetailSingleComponent,
  
   
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatRippleModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    BsDatepickerModule.forRoot(),
    NgxMaterialTimepickerModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
