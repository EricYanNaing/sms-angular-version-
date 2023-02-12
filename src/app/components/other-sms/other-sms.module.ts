import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherSmsRoutingModule } from './other-sms-routing.module';
import { SendOtherSmsConfigurationComponent } from './send-other-sms/send-other-sms-configuration/send-other-sms-configuration.component';
import { SugarMillFactoryConfigurationComponent } from './sugar-mill-factory/sugar-mill-factory-configuration/sugar-mill-factory-configuration.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ScheduleViewDetailComponent } from './schedule-view-detail/schedule-view-detail.component';
import { CustomViewDetailComponent } from './custom-view-detail/custom-view-detail.component';
import { CustomViewDetailActionComponent } from '../modal/custom-view-detail-action/custom-view-detail-action.component';
import { ScheduleViewDetailActionComponent } from '../modal/schedule-view-detail-action/schedule-view-detail-action.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    SendOtherSmsConfigurationComponent,
    SugarMillFactoryConfigurationComponent,
    ScheduleViewDetailComponent,
    CustomViewDetailComponent,
    CustomViewDetailActionComponent,
    ScheduleViewDetailActionComponent,
  ],
  imports: [
    CommonModule,
    OtherSmsRoutingModule,
    MatSelectModule,
    MatRippleModule,
    MatRippleModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    BsDatepickerModule.forRoot(),
    NgxMaterialTimepickerModule
  ]
})
export class OtherSmsModule { }
