import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-off-net-report-detail',
  templateUrl: './off-net-report-detail.component.html',
  styleUrls: ['./off-net-report-detail.component.scss']
})
export class OffNetReportDetailComponent implements AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['companyName', 'smsMethod', 'smsService','SourceOperator', 'designationOperator','osType','sendType','frequency','mobileCount','price','frequencyCount','NoOfMessage','totalMessage','totalAmount','fromDate','toDate','fromTime','toTime','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns1: string[] = [ 'smsMethod', 'smsService','SourceOperator', 'designationOperator','osType','sendType','frequency','mobileCount','price','frequencyCount','NoOfMessage','totalMessage','totalAmount','mobile','status'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
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
  action:string;
  

}

export interface PeriodicElement1 {
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
  mobile:string;
  status:string;
  

}


const ELEMENT_DATA: PeriodicElement[] = [
  {
  companyName:'CGM',
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
  toDate:'Mon,12-Sept-2021',
  fromTime:'12:10:20',
  toTime:'18:00:00',
  action:'assets/img/Icon/Eye.svg'
 
},




];

const ELEMENT_DATA1: PeriodicElement1[] = [
  {
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
  mobile:'091232434',
  status:'Completed'
 
},


{
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
  mobile:'091232434',
  status:'Completed'
 
},


{
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
  mobile:'091232434',
  status:'Completed'
 
},



{
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
  mobile:'091232434',
  status:'Completed'
 
},


{
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
  mobile:'091232434',
  status:'Completed'
 
},
{
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
  mobile:'091232434',
  status:'Completed'
 
},

{
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
  mobile:'091232434',
  status:'Completed'
 
},

{
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
  mobile:'091232434',
  status:'Completed'
 
},


{
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
  mobile:'091232434',
  status:'Completed'
 
},


{
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
  mobile:'091232434',
  status:'Completed'
 
},

{
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
  mobile:'091232434',
  status:'Completed'
 
},
{
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
  mobile:'091232434',
  status:'Completed'
 
},

{
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
  mobile:'091232434',
  status:'Completed'
 
},
];


