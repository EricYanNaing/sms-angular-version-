import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-custom-sms-report-detail',
  templateUrl: './custom-sms-report-detail.component.html',
  styleUrls: ['./custom-sms-report-detail.component.scss']
})
export class CustomSmsReportDetailComponent implements AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['fileNo', 'fileName', 'okId','customName', 'SourceOperator','designationOperator','smsMethod','osType','smsEng','smsZawgyi','smsUnicode','sendType','frequency','mobileCount','price','frequencyCount','NoOfMessage','totalMessage','okId','totalAmount','refundId','refundReason','refendStatus','refendAmount','fromDate','toDate','fromTime','toTime','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  displayedColumns1: string[] = ['fileNo', 'fileName', 'okId','customName', 'SourceOperator','designationOperator','smsMethod','osType','smsEng','smsZawgyi','smsUnicode','sendType','frequency','mobileNo','price','frequencyCount','NoOfMessage','totalMessage','okId','totalAmount','refundId','refundReason','refendStatus','refendAmount','fromDate','toDate','fromTime','toTime'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
  }

}
export interface PeriodicElement {
 
  fileNo:string;
  fileName: string;
  okId: string;
  customName: string;
  SourceOperator:string;
  designationOperator:string;
  smsMethod: string;
  osType: string;
  smsEng:string;
  smsZawgyi:string;
  smsUnicode:string;
  sendType: string;
  frequency:string;
  mobileCount: string;
  price:string;
  frequencyCount:string;
  NoOfMessage:string;
  totalMessage:string;
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



export interface PeriodicElement1 {
  
  fileNo:string;
  fileName: string;
  okId: string;
  customName: string;
  SourceOperator:string;
  designationOperator:string;
  smsMethod: string;
  osType: string;
  smsEng:string;
  smsZawgyi:string;
  smsUnicode:string;
  sendType: string;
  frequency:string;
  mobileNo: string;
  price:string;
  frequencyCount:string;
  NoOfMessage:string;
  totalMessage:string;
  totalAmount:string;
  refundId:string;
  refundReason:string;
  refendStatus:string;
  refendAmount:string;
  fromDate:string;
  toDate:string;
  fromTime:string;
  toTime:string;
 
}




  const ELEMENT_DATA: PeriodicElement[] = [
    {fileNo:'202180641104528',
  fileName:'File Name 1',
  okId:'1063010697',
  customName:'ABC',
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg'
},
];

const ELEMENT_DATA1: PeriodicElement1[] = [
  {fileNo:'202180641104528',
  fileName:'File Name 1',
  okId:'1063010697',
  customName:'ABC',
  SourceOperator:'MPT',
  designationOperator:'MPT',
  smsMethod:'On Net',
  osType:'Both',
  smsEng:'Hi, Mingalar Par',
  smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
  smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
  sendType:'Immediately',
  frequency:'-',
  mobileNo:'09452123456',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  totalAmount:'140,000',
  refundId:'-',
  refundReason:'-',
  refendStatus:'-',
  refendAmount:'-',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
 
},

{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},


{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},


{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},

{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},
{fileNo:'202180641104528',
fileName:'File Name 1',
okId:'1063010697',
customName:'ABC',
SourceOperator:'MPT',
designationOperator:'MPT',
smsMethod:'On Net',
osType:'Both',
smsEng:'Hi, Mingalar Par',
smsZawgyi:'ဟိုင်း, မင်္ဂလာပါ',
smsUnicode:'ဟိုင်း, မင်္ဂလာပါ',
sendType:'Immediately',
frequency:'-',
mobileNo:'09452123456',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
refundId:'-',
refundReason:'-',
refendStatus:'-',
refendAmount:'-',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',

},



];

