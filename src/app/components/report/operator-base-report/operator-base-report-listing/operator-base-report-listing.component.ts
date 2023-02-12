import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { OperatorBaseReportFilterComponent } from 'src/app/components/modal/operator-base-report-filter/operator-base-report-filter.component';
import {MatTableDataSource} from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-operator-base-report-listing',
  templateUrl: './operator-base-report-listing.component.html',
  styleUrls: ['./operator-base-report-listing.component.scss']
})


  export class OperatorBaseReportListingComponent implements AfterViewInit {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(OperatorBaseReportFilterComponent, {
        width: '850px',
        data: {}
      });
    }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['SourceOperator', 'designationOperator','smsMethod', 'osType','smsEng','smsZawgyi','smsUnicode','sendType','frequency','mobileCount','price','frequencyCount','NoOfMessage','totalMessage','okId','totalAmount','refundId','refundReason','refendStatus','refendAmount','fromDate','toDate','fromTime','toTime','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
 
  SourceOperator: string;
  designationOperator: string;
  smsMethod: string;
  osType:string;
  smsEng:string;
  smsZawgyi: string;
  smsUnicode: string;
  sendType: string;
  frequency:string;
  mobileCount: string;
  price:string;
  frequencyCount:string;
  NoOfMessage:string;
  totalMessage:string;
  okId:string;
  totalAmount:string;
  refundId:string;
  refundReason:string;
  refendStatus:string;
  refendAmount:string;
  fromDate:string;
  toDate:string;
  fromTime:string;
  toTime:string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},

{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},

{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},

{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},


{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},

{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},

{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},


{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},

{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},

{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},

{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},

{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},
{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},
{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},
{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},
{
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'SMS Content Unicode',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  okId:'1063010697',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg',
},



    
];


