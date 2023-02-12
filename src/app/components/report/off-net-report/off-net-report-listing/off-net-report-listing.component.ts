import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { OffNetReportFilterComponent } from 'src/app/components/modal/off-net-report-filter/off-net-report-filter.component';
import {MatTableDataSource} from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-off-net-report-listing',
  templateUrl: './off-net-report-listing.component.html',
  styleUrls: ['./off-net-report-listing.component.scss']
})

  export class OffNetReportListingComponent implements AfterViewInit {
    constructor(public dialog: MatDialog) {}
  
    openDialog() {
      this.dialog.open(OffNetReportFilterComponent, {
        width: '850px',
        data: {}
      });
    }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['companyName', 'smsMethod', 'smsService','SourceOperator', 'designationOperator','osType','sendType','frequency','mobileCount','price','frequencyCount','NoOfMessage','totalMessage','totalAmount','fromDate','toDate','fromTime','toTime','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  companyName:string;
  smsMethod: string;
  smsService: string;
  SourceOperator: string;
  designationOperator:string;
  osType:string;
  sendType: string;
  frequency:string;
  mobileCount: string;
  price:string;
  frequencyCount:string;
  NoOfMessage:string;
  totalMessage:string;
  totalAmount:string;
  fromDate:string;
  toDate:string;
  fromTime:string;
  toTime:string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {companyName:'CGM',
  smsMethod:'Off Net',
  smsService:'Pay To',
  SourceOperator:'MPT',
  designationOperator:'MPT',
  osType:'Both',
  sendType:'Immediately',
  frequency:'-',
  mobileCount:'2000',
  price :'7',
  frequencyCount:'-',
  NoOfMessage:'-',
  totalMessage:'20,000',
  totalAmount:'140,000',
  fromDate:'Fri,12-Jun-2021',
  toDate:'Mon,12-Sep-2021',
  fromTime:'12:10:20',toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

{companyName:'CGM',
smsMethod:'Off Net',
smsService:'Pay To',
SourceOperator:'MPT',
designationOperator:'MPT',
osType:'Both',
sendType:'Immediately',
frequency:'-',
mobileCount:'2000',
price :'7',
frequencyCount:'-',
NoOfMessage:'-',
totalMessage:'20,000',
totalAmount:'140,000',
fromDate:'Fri,12-Jun-2021',
toDate:'Mon,12-Sep-2021',
fromTime:'12:10:20',toTime:'18:00:00',
action:'assets/img/Icon/Eye.svg'
},

];
