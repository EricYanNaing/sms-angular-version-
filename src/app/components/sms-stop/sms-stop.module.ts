import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmsStopRoutingModule } from './sms-stop-routing.module';
import{ BulkSmsStopListingComponent} from './bulk-sms-stop/bulk-sms-stop-listing/bulk-sms-stop-listing.component';
import{ IndividualSmsStopListingComponent } from './individual-sms-stop/individual-sms-stop-listing/individual-sms-stop-listing.component';
import {MatButtonModule} from "@angular/material/button";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateBulkSmsStopComponent } from './bulk-sms-stop/create-bulk-sms-stop/create-bulk-sms-stop.component';
import{CreateIndividualSmsStopComponent } from './individual-sms-stop/create-individual-sms-stop/create-individual-sms-stop.component'

@NgModule({
  declarations: [
    BulkSmsStopListingComponent,
    IndividualSmsStopListingComponent,
    CreateBulkSmsStopComponent,
    CreateIndividualSmsStopComponent
 


  ],
  imports: [
    CommonModule,
    SmsStopRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule 
 
  ]
})
export class SmsStopModule { }
