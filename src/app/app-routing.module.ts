import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './shared/layout/simple-layout/simple-layout.component';
const routes: Routes = [
  {
    path: '', redirectTo:'/dashboard', pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  }, 
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [{
      path: 'user-role-master',
      loadChildren: () => import('./components/user-role-master/user-role-master.module').then(m => m.UserRoleMasterModule)
    },
    {
      path: 'UserRolePermission',
      loadChildren: () => import('./components/user-role-permission/user-role-permission.module').then(m => m.UserRolePermissionModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'ok-sms-configuration',
      loadChildren: () => import('./components/ok-sms-configuration/ok-sms-configuration.module').then(m => m.OkSmsConfigurationModule)
    },
    {
      path: 'SetSMSPrice',
      loadChildren: () => import('./components/set-sms-price/set-sms-price.module').then(m => m.SetSmsPriceModule)
    },
    {
      path: 'SmsChannelChange',
      loadChildren: () => import('./components/sms-channel-change/sms-channel-change.module').then(m => m.SmsChannelChangeModule)
    },
    {
      path: 'other-sms',
      loadChildren: () => import('./components/other-sms/other-sms.module').then(m => m.OtherSmsModule)
    },
    {
      path: 'user-role-master',
      loadChildren: () => import('./components/user-role-master/user-role-master.module').then(m => m.UserRoleMasterModule)
    },
    {
      path: 'sms-stop',
      loadChildren: () => import('./components/sms-stop/sms-stop.module').then(m => m.SmsStopModule)
    },
    {
      path: 'email',
      loadChildren: () => import('./components/email/email.module').then(m => m.EmailModule)
    },
    {
      path: 'report',
      loadChildren: () => import('./components/report/report.module').then(m => m.ReportModule)
    },
    {
      path: 'SmsWhiteList',
      loadChildren: () => import('./components/sms-white-list/sms-white-list.module').then(m => m.SmsWhiteListModule)
    },
    {
      path: 'ChangePassword',
      loadChildren: () => import('./components/change-password/change-password.module').then(m => m.ChangePasswordModule)
    },
    {
      path: 'Logout', 
      loadChildren: () => import('./components/logout/logout.module').then(m => m.LogoutModule)
    },
    {
      path: 'Profile', 
      loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)
    },
    
  ]
  },
  {
    path: 'CompanyName',
    loadChildren: () =>
      import('./components/user-role-master/company/company-listing.module').then(
        (m) => m.CompanyListingModule
      ),
  },
  {
    path: 'DesignationName',
    loadChildren: () =>
      import('./components/user-role-master/designation/designation-listing.module').then(
        (m) => m.DesignationListingModule
      ),
  },
  {
    path: 'DepartmentName',
    loadChildren: () =>
      import('./components/user-role-master/department/department-listing.module').then(
        (m) => m.DepartmentListingModule
      ),
  },
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
