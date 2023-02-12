import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { IndividualSmsStopFilterComponent } from 'src/app/components/modal/individual-sms-stop-filter/individual-sms-stop-filter.component';
import { UpdateIndividualSmsStopFilterComponent } from 'src/app/components/modal/update-individual-sms-stop-filter/update-individual-sms-stop-filter.component';

@Component({
  selector: 'app-individual-sms-stop-listing',
  templateUrl: './individual-sms-stop-listing.component.html',
  styleUrls: ['./individual-sms-stop-listing.component.scss']
})
export class IndividualSmsStopListingComponent implements  AfterViewInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(IndividualSmsStopFilterComponent, {
      width: '850px',
      data: {}
    });
  }

  openUpdateDialog() {
    this.dialog.open(UpdateIndividualSmsStopFilterComponent, {
      width: '950px',
      data: {}
    });
  }

displayedColumns: string[] = [ 'stop','service','mobile','dateTime', 'action'];
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
  service: string;
  mobile: string;
  dateTime: string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
{ stop: 'Source', service: 'Pay To',  mobile: '+95 09421056929', dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Destination', service: 'Top Up',  mobile: '+95 09421000484', dateTime:'Web,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Both', service: 'Data Plan',  mobile: '+95 09421000251', dateTime:'Thu,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Source', service: 'Gift Card',  mobile: '+95 09421035581', dateTime:'Fri,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Destination', service: 'Electricity Bill',  mobile: '+95 09421002681', dateTime:'Sat,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Source', service: 'Pay To',  mobile: '+95 09421056929', dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Destination', service: 'Top Up',  mobile: '+95 09421000484', dateTime:'Web,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Both', service: 'Data Plan',  mobile: '+95 09421000251', dateTime:'Thu,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Source', service: 'Gift Card',  mobile: '+95 09421035581', dateTime:'Fri,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Destination', service: 'Electricity Bill',  mobile: '+95 09421002681', dateTime:'Sat,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Source', service: 'Pay To',  mobile: '+95 09421056929', dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Destination', service: 'Top Up',  mobile: '+95 09421000484', dateTime:'Web,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Both', service: 'Data Plan',  mobile: '+95 09421000251', dateTime:'Thu,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Source', service: 'Gift Card',  mobile: '+95 09421035581', dateTime:'Fri,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Destination', service: 'Electricity Bill',  mobile: '+95 09421002681', dateTime:'Sat,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Source', service: 'Pay To',  mobile: '+95 09421056929', dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Destination', service: 'Top Up',  mobile: '+95 09421000484', dateTime:'Web,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Both', service: 'Data Plan',  mobile: '+95 09421000251', dateTime:'Thu,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Source', service: 'Gift Card',  mobile: '+95 09421035581', dateTime:'Fri,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},
{ stop: 'Destination', service: 'Electricity Bill',  mobile: '+95 09421002681', dateTime:'Sat,01-Feb-2021, 12:41:39', action:'assets/img/Icon/Edit Pattern.svg'},


];


