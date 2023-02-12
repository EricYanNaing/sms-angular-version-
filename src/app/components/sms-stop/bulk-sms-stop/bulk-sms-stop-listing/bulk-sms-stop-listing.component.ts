import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { BulkSmsStopFilterComponent } from 'src/app/components/modal/bulk-sms-stop-filter/bulk-sms-stop-filter.component';
import{UpdateBulkSmsStopFilterComponent} from 'src/app/components/modal/update-bulk-sms-stop-filter/update-bulk-sms-stop-filter.component'

@Component({
  selector: 'app-bulk-sms-stop-listing',
  templateUrl: './bulk-sms-stop-listing.component.html',
  styleUrls: ['./bulk-sms-stop-listing.component.scss']
})
export class BulkSmsStopListingComponent implements   AfterViewInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(BulkSmsStopFilterComponent, {
      width: '850px',
      data: {}
    }); 
  }

  openUpdateDialog() {
    this.dialog.open(UpdateBulkSmsStopFilterComponent, {
      width: '1000px',
      data: {}
    }); 
  }

displayedColumns: string[] = ['stop', 'account', 'ServiceType', 'operatorName', 'osType', 'osVersion', 'okApp', 'buildNumber', 'noOfAcc','dateTime', 'action'];
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
action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
{stop: 'Destination', account: 'Personal', ServiceType: 'Gift Card', operatorName: 'MECTEL', osType: 'Android', osVersion: 'Android 10', okApp:'1.25.9', buildNumber:'105', noOfAcc:'70',  dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Source', account: 'Merchant', ServiceType: 'Electricity Bill', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 7', okApp:'IOS 1.26.1', buildNumber:'108', noOfAcc:'30', dateTime:'Tue, 09-Jan-2021 10:11:25', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Offer', operatorName: 'MPT', osType: 'Android', osVersion: 'Android 8', okApp:'1.27.4', buildNumber:'104', noOfAcc:'40', dateTime:'Wed, 10-Jan-2021 09:14:18', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Source', account: 'Personal', ServiceType: 'E-Cupon', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.25.9', buildNumber:'102', noOfAcc:'80', dateTime:'Thur, 11-Jan-2021 11:15:28', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Data Plan', operatorName: 'OOREDOO', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.27.1', buildNumber:'103', noOfAcc:'50',  dateTime:'Fri, 12-Jan-2021 10:18:24', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Destination', account: 'Personal', ServiceType: 'Gift Card', operatorName: 'MECTEL', osType: 'Android', osVersion: 'Android 10', okApp:'1.25.9', buildNumber:'105', noOfAcc:'70',  dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Source', account: 'Merchant', ServiceType: 'Electricity Bill', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 7', okApp:'IOS 1.26.1', buildNumber:'108', noOfAcc:'30', dateTime:'Tue, 09-Jan-2021 10:11:25', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Offer', operatorName: 'MPT', osType: 'Android', osVersion: 'Android 8', okApp:'1.27.4', buildNumber:'104', noOfAcc:'40', dateTime:'Wed, 10-Jan-2021 09:14:18', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Source', account: 'Personal', ServiceType: 'E-Cupon', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.25.9', buildNumber:'102', noOfAcc:'80', dateTime:'Thur, 11-Jan-2021 11:15:28', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Data Plan', operatorName: 'OOREDOO', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.27.1', buildNumber:'103', noOfAcc:'50',  dateTime:'Fri, 12-Jan-2021 10:18:24', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Destination', account: 'Personal', ServiceType: 'Gift Card', operatorName: 'MECTEL', osType: 'Android', osVersion: 'Android 10', okApp:'1.25.9', buildNumber:'105', noOfAcc:'70',  dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Source', account: 'Merchant', ServiceType: 'Electricity Bill', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 7', okApp:'IOS 1.26.1', buildNumber:'108', noOfAcc:'30', dateTime:'Tue, 09-Jan-2021 10:11:25', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Offer', operatorName: 'MPT', osType: 'Android', osVersion: 'Android 8', okApp:'1.27.4', buildNumber:'104', noOfAcc:'40', dateTime:'Wed, 10-Jan-2021 09:14:18', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Source', account: 'Personal', ServiceType: 'E-Cupon', operatorName: 'MPT', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.25.9', buildNumber:'102', noOfAcc:'80', dateTime:'Thur, 11-Jan-2021 11:15:28', action:'assets/img/Icon/Edit Pattern.svg'},

{stop: 'Destination', account: 'Advance Merchant', ServiceType: 'Data Plan', operatorName: 'OOREDOO', osType: 'IOS', osVersion: 'IOS 9', okApp:'1.27.1', buildNumber:'103', noOfAcc:'50',  dateTime:'Fri, 12-Jan-2021 10:18:24', action:'assets/img/Icon/Edit Pattern.svg'},

 
];


