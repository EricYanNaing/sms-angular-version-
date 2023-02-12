import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-sms-white-list-listing',
  templateUrl: './sms-white-list-listing.component.html',
  styleUrls: ['./sms-white-list-listing.component.scss']
})
export class SmsWhiteListListingComponent implements   AfterViewInit {

  constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   this.dialog.open(BulkSmsStopFilterComponent, {
  //     width: '850px',
  //     data: {}
  //   });
  // }

  displayedColumns: string[] = ['stop', 'account', 'ServiceType', 'operatorName', 'osType', 'osVersion', 'okApp', 'buildNumber', 'noOfAcc','dateTime'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  }
  // constructor(public dialog: MatDialog) { }
  
  //   ngOnInit(): void {
  //   }
  
  // filterTable();{
  //   const dialogRef = this.dialog.open(UserRolePermissionFilterComponent, {
  //     width: '850px',
  //     data: {}
  //     });
  
  //     dialogRef.afterClosed().subscribe(result => {
  //       if(result){}
  //   });
  // }
  
  
  
  export interface PeriodicElement {
  stop: string;
  account: string;
  ServiceType: string;
  operatorName: string;
  osType: string;
  osVersion: string;
  okApp: string;
  buildNumber: string;
  noOfAcc: string;
  dateTime: string;
 
  
  }
  
  
  const ELEMENT_DATA: PeriodicElement[] = [
  {stop: 'Destination', account: 'Personal', ServiceType: 'Gift Card', operatorName: 'MECTEL', osType: 'Android', osVersion: 'Android 10', okApp:'1.25.9', buildNumber:'105', noOfAcc:'70',  dateTime:'Mon, 08-Jan-2021 09:10:20'},
  
  {stop: 'Source', account: 'Merchant', ServiceType: 'Electricity Bill', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 7', okApp:'IOS 1.26.1', buildNumber:'108', noOfAcc:'30', dateTime:'Tue, 09-Jan-2021 10:11:25'},
  
  {stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Offer', operatorName: 'MPT', osType: 'Android', osVersion: 'Android 8', okApp:'1.27.4', buildNumber:'104', noOfAcc:'40', dateTime:'Wed, 10-Jan-2021 09:14:18'},
  
  {stop: 'Source', account: 'Personal', ServiceType: 'E-Cupon', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.25.9', buildNumber:'102', noOfAcc:'80', dateTime:'Thur, 11-Jan-2021 11:15:28'},
  
  {stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Data Plan', operatorName: 'OOREDOO', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.27.1', buildNumber:'103', noOfAcc:'50',  dateTime:'Fri, 12-Jan-2021 10:18:24'},
  
  {stop: 'Destination', account: 'Personal', ServiceType: 'Gift Card', operatorName: 'MECTEL', osType: 'Android', osVersion: 'Android 10', okApp:'1.25.9', buildNumber:'105', noOfAcc:'70',  dateTime:'Mon, 08-Jan-2021 09:10:20'},
  
  {stop: 'Source', account: 'Merchant', ServiceType: 'Electricity Bill', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 7', okApp:'IOS 1.26.1', buildNumber:'108', noOfAcc:'30', dateTime:'Tue, 09-Jan-2021 10:11:25'},
  
  {stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Offer', operatorName: 'MPT', osType: 'Android', osVersion: 'Android 8', okApp:'1.27.4', buildNumber:'104', noOfAcc:'40', dateTime:'Wed, 10-Jan-2021 09:14:18'},
  
  {stop: 'Source', account: 'Personal', ServiceType: 'E-Cupon', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.25.9', buildNumber:'102', noOfAcc:'80', dateTime:'Thur, 11-Jan-2021 11:15:28'},
  
  {stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Data Plan', operatorName: 'OOREDOO', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.27.1', buildNumber:'103', noOfAcc:'50',  dateTime:'Fri, 12-Jan-2021 10:18:24'},
  
  {stop: 'Destination', account: 'Personal', ServiceType: 'Gift Card', operatorName: 'MECTEL', osType: 'Android', osVersion: 'Android 10', okApp:'1.25.9', buildNumber:'105', noOfAcc:'70',  dateTime:'Mon, 08-Jan-2021 09:10:20'},
  
  {stop: 'Source', account: 'Merchant', ServiceType: 'Electricity Bill', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 7', okApp:'IOS 1.26.1', buildNumber:'108', noOfAcc:'30', dateTime:'Tue, 09-Jan-2021 10:11:25'},
  
  {stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Offer', operatorName: 'MPT', osType: 'Android', osVersion: 'Android 8', okApp:'1.27.4', buildNumber:'104', noOfAcc:'40', dateTime:'Wed, 10-Jan-2021 09:14:18'},
  
  {stop: 'Source', account: 'Personal', ServiceType: 'E-Cupon', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.25.9', buildNumber:'102', noOfAcc:'80', dateTime:'Thur, 11-Jan-2021 11:15:28'},
  
  {stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Data Plan', operatorName: 'OOREDOO', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.27.1', buildNumber:'103', noOfAcc:'50',  dateTime:'Fri, 12-Jan-2021 10:18:24'},
  
   
  ];
  