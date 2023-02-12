import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetSmsPriceRoutingModule } from './set-sms-price-routing.module';

import { SetSmsPriceListingComponent } from './set-sms-price-listing/set-sms-price-listing.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
  
    SetSmsPriceListingComponent
  ],
  imports: [
    CommonModule,
    SetSmsPriceRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule
    
  ]
})
export class SetSmsPriceModule { }
