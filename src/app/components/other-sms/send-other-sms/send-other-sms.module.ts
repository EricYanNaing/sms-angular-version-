import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendOtherSmsRoutingModule } from './send-other-sms-routing.module';
import { SendOtherSmsConfigurationComponent } from './send-other-sms-configuration/send-other-sms-configuration.component';
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


@NgModule({
  declarations: [
    SendOtherSmsConfigurationComponent
  ],
  imports: [
    CommonModule,
    SendOtherSmsRoutingModule,
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
    MatInputModule
  ]
})
export class SendOtherSmsModule { }
