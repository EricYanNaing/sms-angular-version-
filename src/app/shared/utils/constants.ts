export const menuItems = [

    {
        displayName: 'Dashboard',
        route: 'dashboard',
        iconName: '../../../../assets/img/Icon/Dashboard.svg',
       
        
        children: []
      },
      {
        displayName: 'User Role Master',
        route: '',
        iconName: '../../../../assets/img/Icon/B Master.svg',
        children: [
          {
            displayName: 'Company',
            route: 'user-role-master/company-listing',
            iconName: '../../../../assets/img/Icon/B Company.svg',
            children: [
                 
            ]
          },
          {
            displayName: 'Department',
            route: 'user-role-master/department-listing',
            iconName: '../../../../assets/img/Icon/B Department.svg',
            children: []
          },
          {
            displayName: 'Designation',
            route: 'user-role-master/designation-listing',
            iconName: '../../../../assets/img/Icon/B Designation.svg',
            children: []
          },
        ]
      },
      {
        displayName: 'User Role Permission',
        route: 'UserRolePermission',
        iconName: '../../../../assets/img/Icon/User Role Permission.svg',
        children: []
      },
      {
        displayName: 'Set SMS Price',
        route: 'SetSMSPrice',
        iconName: '../../../../assets/img/Icon/Set SMS Price.svg',
        children: []
      },
      {
        displayName: 'SMS Channel Change',
        route: 'SmsChannelChange',
        iconName: '../../../../assets/img/Icon/SMS Channel Change.svg',
        children: []
      },
      {
        displayName: 'OK$ SMS Configuration',
        route: 'ok-sms-configuration',
        iconName: '../../../../assets/img/Icon/OK$ SMS Configuration.svg',
        children: []
      },

      {
        displayName: 'Other SMS',
        route: '',
        iconName: '../../../../assets/img/Icon/Other SMS.svg',
        children: [
          {
            displayName: 'Send Other SMS ',
            route: 'other-sms/send-other-sms',
            iconName: '../../../../assets/img/Icon/Send Other SMS.svg',
            children: []
          },
          {
            displayName: 'Sugar Mill Factory',
            route: 'other-sms/sugar-mill-factory',
            iconName: '../../../../assets/img/Icon/Sugar Mill Factory.svg',
            children: []
          },
          {
            displayName: 'Schedule View Detail',
            route: 'other-sms/schedule-view-detail',
            iconName: '../../../../assets/img/Icon/Schedule View Detail.svg',
            children: []
          },
          {
            displayName: 'Custom View Detail',
            route: 'other-sms/custom-view-detail',
            iconName: '../../../../assets/img/Icon/Sugar Mill Factory.svg',
            children: []
          },
        ]
      },

      {
        displayName: 'E-mail',
        route: '',
        iconName: '../../../../assets/img/Icon/Email.svg',
        children: [
          {
            displayName: 'E-mail Configuration',
            route: 'email/email-configuration',
            iconName: '../../../../assets/img/Icon/Email Configuration.svg',
            children: []
          },
          {
            displayName: 'Individual E-mail',
            route: 'email/individual-email',
            iconName: '../../../../assets/img/Icon/Individual E-mail.svg',
            children: []
          },
          {
            displayName: 'Bulk E-mail',
            route: 'email/bulk-email',
            iconName: '../../../../assets/img/Icon/Bulk Email.svg',
            children: []
          },
        ]
      },

      
      {
        displayName: 'SMS Stop',
        route: '',
        iconName: '../../../../assets/img/Icon/SMS Stop.svg',
        children: [
          {
            displayName: 'Bulk SMS Stop',
            route: 'sms-stop/bulk-sms-stop-listing',
            iconName: '../../../../assets/img/Icon/Bulk SMS Stop.svg',
            children: []
          },
          {
            displayName: 'Individual SMS Stop',
            route: 'sms-stop/individual-sms-stop-listing',
            iconName: '../../../../assets/img/Icon/Individual SMS Stop.svg',
            children: []
          },
          
        ]
      },
  
      {
        displayName: 'SMS White List',
        route: 'SmsWhiteList',
        iconName: '../../../../assets/img/Icon/SMS White List.svg',
        children: []
      },

      {
        displayName: 'Report',
        route: '',
        iconName: '../../../../assets/img/Icon/Report.svg',
        children: [
          {
            displayName: 'SMS Channel Change Report',
            route: 'report/sms-channel-change',
            iconName: '../../../../assets/img/Icon/SMS Channel Change Report.svg',
            children: []
          },
          {
            displayName: 'Other SMS Bulk File View',
            route: 'report/other-sms-bulk-file-view',
            iconName: '../../../../assets/img/Icon/Other SMS Bulk File View.svg',
            children: []
          },
          {
            displayName: 'On-Net Report',
            route: 'report/on-net-report',
            iconName: '../../../../assets/img/Icon/On Net Report.svg',
            children: []
          },

          {
            displayName: 'Off-Net Report',
            route: 'report/off-net-report',
            iconName: '../../../../assets/img/Icon/Off Net Report.svg',
            children: []
          },
          {
            displayName: 'Operator Base Report',
            route: 'report/operator-base-report',
            iconName: '../../../../assets/img/Icon/Operator Base Report.svg',
            children: []
          },
          {
            displayName: 'Company Base Report',
            route: 'report/company-base-report',
            iconName: '../../../../assets/img/Icon/Company Base SMS Report.svg',
            children: []
          },


          {
            displayName: 'Custom SMS Report',
            route: 'report/custom-sms-report',
            iconName: '../../../../assets/img/Icon/Custom SMS Report.svg',
            children: []
          },
        ]
      },
  
      {
        displayName: 'Change Password',
        route: 'ChangePassword',
        iconName: '../../../../assets/img/Icon/Change Password.svg',
        children: []
      },
      {
        displayName: 'Logout',
        route: 'Logout',
        iconName: '../../../../assets/img/Icon/logout.png',
        children: []
      },

]