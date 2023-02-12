import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsChannelChangeRoutingModule } from './sms-channel-change-routing.module';
import { SmsChannelListingComponent } from './sms-channel-listing/sms-channel-listing.component';
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
import { CreateSmsChannelComponent } from './create-sms-channel/create-sms-channel.component';

@NgModule({
  declarations: [
    SmsChannelListingComponent,
    CreateSmsChannelComponent
  ],
  imports: [
    CommonModule,
    SmsChannelChangeRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class SmsChannelChangeModule { }
