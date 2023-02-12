import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmsWhiteListRoutingModule } from './sms-white-list-routing.module';
import {SmsWhiteListListingComponent } from './sms-white-list-listing/sms-white-list-listing.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule } from '@angular/material/icon';
import {MatChipsModule } from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {FilterSmsWhiteListComponent} from './filter-sms-white-list/filter-sms-white-list.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    SmsWhiteListListingComponent,
    FilterSmsWhiteListComponent,
  
   
  ],
  imports: [
    CommonModule,
    SmsWhiteListRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule ,
    BsDatepickerModule.forRoot()
    

  
  ]
})
export class SmsWhiteListModule { }
