import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OkSmsConfigurationComponent } from './ok-sms-configuration.component';
import { OkSmsConfigurationRoutingModule } from './ok-sms-configuration-routing.module';

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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
@NgModule({
  declarations: [
    OkSmsConfigurationComponent 
  ],
  imports: [
    MatFormFieldModule,
    CommonModule,
    OkSmsConfigurationRoutingModule,
    MatSelectModule,
    MatRippleModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    BsDatepickerModule,
    NgxMaterialTimepickerModule
  ]
})
export class OkSmsConfigurationModule { }
