import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { EmailConfigurationListingComponent } from './email-configuration/email-configuration-listing/email-configuration-listing.component';
import { AddEmailConfigurationDetailComponent } from './email-configuration/add-email-configuration-detail/add-email-configuration-detail.component';
import { EditEmailConfigurationDetailComponent } from './email-configuration/edit-email-configuration-detail/edit-email-configuration-detail.component';
import { BulkEmailListingComponent } from './bulk-email/bulk-email-listing/bulk-email-listing.component';
import { AddBulkEmailDetailComponent } from './bulk-email/add-bulk-email-detail/add-bulk-email-detail.component';

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
import { IndividualEmailListingComponent } from './individual-email/individual-email-listing/individual-email-listing.component';
import { AddIndividualEmailComponent } from './individual-email/add-individual-email/add-individual-email.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    EmailConfigurationListingComponent,
    AddEmailConfigurationDetailComponent,
    EditEmailConfigurationDetailComponent,
    BulkEmailListingComponent,
    AddBulkEmailDetailComponent,
    IndividualEmailListingComponent,
    AddIndividualEmailComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
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
    NgxMaterialTimepickerModule,
    BsDatepickerModule
  ]
})
export class EmailModule { }
