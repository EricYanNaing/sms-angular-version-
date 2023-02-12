import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-other-sms-bulk-file-view-detail',
  templateUrl: './other-sms-bulk-file-view-detail.component.html',
  styleUrls: ['./other-sms-bulk-file-view-detail.component.scss']
})
export class OtherSmsBulkFileViewDetailComponent implements AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['fileName', 'fileReNo', 'transaction', 'userType', 'mobileCount', 'fromtoDate', 'fromtoTime','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns1: string[] = [ 'fileName', 'fileReNo', 'transaction', 'userType', 'mobile', 'fromtoDate', 'fromtoTime','status'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
  }

}
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

export interface PeriodicElement1 {
  fileName: string;
  fileReNo: string;
  transaction: string;
  userType: string;
  mobile: string;
  fromtoDate: string;
  fromtoTime: string;
  status:string;


  

}


const ELEMENT_DATA: PeriodicElement[] = [
  
    {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobileCount: '200', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error', action:'assets/img/Icon/Eye.svg'},




];

const ELEMENT_DATA1: PeriodicElement1[] = [
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09123456781', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09750123456', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09123456781', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09750123456', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09123456781', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09750123456', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09123456781', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09750123456', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09123456781', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09750123456', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09123456781', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09750123456', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09123456781', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09750123456', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09123456781', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09750123456', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09123456781', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09750123456', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09123456781', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
  {fileName: 'Filename 1', fileReNo: '2021080641104528', transaction: 'Other', userType: 'Non OK$ TopUp Customer', mobile: '09750123456', fromtoDate: 'Fri,08-Jul-2021, 12:18:20	', fromtoTime:'Mon,15-Jul-2021, 12:18:45',status:'Error'},
];
