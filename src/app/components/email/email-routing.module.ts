import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBulkEmailDetailComponent } from './bulk-email/add-bulk-email-detail/add-bulk-email-detail.component';
import { BulkEmailListingComponent } from './bulk-email/bulk-email-listing/bulk-email-listing.component';
import { AddEmailConfigurationDetailComponent } from './email-configuration/add-email-configuration-detail/add-email-configuration-detail.component';
import { EditEmailConfigurationDetailComponent } from './email-configuration/edit-email-configuration-detail/edit-email-configuration-detail.component';
import { EmailConfigurationListingComponent } from './email-configuration/email-configuration-listing/email-configuration-listing.component';
import { AddIndividualEmailComponent } from './individual-email/add-individual-email/add-individual-email.component';
import { IndividualEmailListingComponent } from './individual-email/individual-email-listing/individual-email-listing.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'email-configuration',
      component: EmailConfigurationListingComponent
    },
    {
      path: 'individual-email',
      component: IndividualEmailListingComponent
    },
    {
      path: 'bulk-email',
      component: BulkEmailListingComponent
    },
    {
      path:'add-email-configuration-detail',
      component: AddEmailConfigurationDetailComponent
    },
    {
      path:'edit-email-configuration-detail',
      component: EditEmailConfigurationDetailComponent
    },
    {
      path:'add-individual-email',
      component: AddIndividualEmailComponent
    },
    {
      path:'add-bulk-email',
      component: AddBulkEmailDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
