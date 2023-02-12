import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-other-sms-bulk-file-view-listing',
  templateUrl: './other-sms-bulk-file-view-listing.component.html',
  styleUrls: ['./other-sms-bulk-file-view-listing.component.scss']
})
export class OtherSmsBulkFileViewListingComponent implements AfterViewInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined;maxDate = new Date()

  ContentTable:boolean =true;


  constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   this.dialog.open(BulkSmsStopFilterComponent, {
  //     width: '850px',
  //     data: {}
  //   });
  // }

  displayedColumns: string[] = ['fileName', 'fileReNo', 'transaction', 'userType', 'mobileCount', 'fromtoDate', 'fromtoTime','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  isShown: boolean | undefined;

  toggleShow() {

    this.isShown = true;
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
    fileName: string;
    fileReNo: string;
    transaction: string;
    userType: string;
    mobileCount: string;
    fromtoDate: string;
    fromtoTime: string;
    status:string;
    action: string;
  
  }
  
  
  const ELEMENT_DATA: PeriodicElement[] = [
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobileCount: '200', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error', action:'assets/img/Icon/Eye.svg'},
  {fileName: 'Filename 2', fileReNo: '2021080641105783', transaction: 'Sugar Mill', userType: 'Non OK$ TopUp Customer', mobileCount: '300', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Complete', action:'assets/img/Icon/Eye.svg'},
  {fileName: 'Filename 2', fileReNo: '2021080641105837', transaction: 'Sugar Mill', userType: 'Bulk', mobileCount: '400', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45', status:'Process', action:'assets/img/Icon/Eye.svg'},
  {fileName: 'Filename 2', fileReNo: '2021080641105837', transaction: 'Other', userType: 'Bulk', mobileCount: '500', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45', status:'Pre Process',action:'assets/img/Icon/Eye.svg'},
  {fileName: 'Filename 2', fileReNo: '2021080641105837', transaction: 'Other', userType: 'Bulk', mobileCount: '100', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45', status:'All', action:'assets/img/Icon/Eye.svg'},

  
  ];
  
