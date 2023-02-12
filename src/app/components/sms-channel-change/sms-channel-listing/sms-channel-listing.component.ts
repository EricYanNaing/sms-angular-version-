import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-sms-channel-listing',
  templateUrl: './sms-channel-listing.component.html',
  styleUrls: ['./sms-channel-listing.component.scss']
})
export class SmsChannelListingComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['SourceOperator', 'Destination', 'ServiceType','DateTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  SourceOperator: string;

  Destination: string;
  ServiceType: string;
  DateTime:string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {SourceOperator: 'MPT', Destination: 'Telenor', ServiceType:'Pay To',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Telenor', Destination: 'OOREDOO', ServiceType:'Pay To',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'MPT', Destination: 'MEC', ServiceType:'Pay To',DateTime:'Fri, 09-Jun-2021, 12:10:20',  action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Mytel', Destination: 'MYTEL', ServiceType:'Top Up Recharge', DateTime:'Fri, 09-Jun-2021, 12:10:20',action:'assets/img/Icon/Delete Pattern.svg'},
  
  {SourceOperator: 'MPT', Destination: 'Telenor', ServiceType:'DTH',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Telenor', Destination: 'OOREDOO', ServiceType:'Gift Card',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'MPT', Destination: 'MEC', ServiceType:'OTP SIM Changing',DateTime:'Fri, 09-Jun-2021, 12:10:20',  action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Mytel', Destination: 'MYTEL', ServiceType:'Pay To', DateTime:'Fri, 09-Jun-2021, 12:10:20',action:'assets/img/Icon/Delete Pattern.svg'},
  
  {SourceOperator: 'MPT', Destination: 'MEC', ServiceType:'Pay To',DateTime:'Fri, 09-Jun-2021, 12:10:20',  action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Mytel', Destination: 'MYTEL', ServiceType:'Top Up Recharge', DateTime:'Fri, 09-Jun-2021, 12:10:20',action:'assets/img/Icon/Delete Pattern.svg'},
  
  {SourceOperator: 'MPT', Destination: 'Telenor', ServiceType:'DTH',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Telenor', Destination: 'OOREDOO', ServiceType:'Gift Card',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'MPT', Destination: 'MEC', ServiceType:'OTP SIM Changing',DateTime:'Fri, 09-Jun-2021, 12:10:20',  action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Mytel', Destination: 'MYTEL', ServiceType:'Pay To', DateTime:'Fri, 09-Jun-2021, 12:10:20',action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'MPT', Destination: 'MEC', ServiceType:'Pay To',DateTime:'Fri, 09-Jun-2021, 12:10:20',  action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Mytel', Destination: 'MYTEL', ServiceType:'Top Up Recharge', DateTime:'Fri, 09-Jun-2021, 12:10:20',action:'assets/img/Icon/Delete Pattern.svg'},
  
  {SourceOperator: 'MPT', Destination: 'Telenor', ServiceType:'DTH',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Telenor', Destination: 'OOREDOO', ServiceType:'Gift Card',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'MPT', Destination: 'MEC', ServiceType:'OTP SIM Changing',DateTime:'Fri, 09-Jun-2021, 12:10:20',  action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Mytel', Destination: 'MYTEL', ServiceType:'Pay To', DateTime:'Fri, 09-Jun-2021, 12:10:20',action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'MPT', Destination: 'MEC', ServiceType:'Pay To',DateTime:'Fri, 09-Jun-2021, 12:10:20',  action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Mytel', Destination: 'MYTEL', ServiceType:'Top Up Recharge', DateTime:'Fri, 09-Jun-2021, 12:10:20',action:'assets/img/Icon/Delete Pattern.svg'},
  
  {SourceOperator: 'MPT', Destination: 'Telenor', ServiceType:'DTH',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Telenor', Destination: 'OOREDOO', ServiceType:'Gift Card',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'MPT', Destination: 'MEC', ServiceType:'OTP SIM Changing',DateTime:'Fri, 09-Jun-2021, 12:10:20',  action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Mytel', Destination: 'MYTEL', ServiceType:'Pay To', DateTime:'Fri, 09-Jun-2021, 12:10:20',action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'MPT', Destination: 'MEC', ServiceType:'Pay To',DateTime:'Fri, 09-Jun-2021, 12:10:20',  action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Mytel', Destination: 'MYTEL', ServiceType:'Top Up Recharge', DateTime:'Fri, 09-Jun-2021, 12:10:20',action:'assets/img/Icon/Delete Pattern.svg'},
  
  {SourceOperator: 'MPT', Destination: 'Telenor', ServiceType:'DTH',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Telenor', Destination: 'OOREDOO', ServiceType:'Gift Card',DateTime:'Fri, 09-Jun-2021, 12:10:20', action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'MPT', Destination: 'MEC', ServiceType:'OTP SIM Changing',DateTime:'Fri, 09-Jun-2021, 12:10:20',  action:'assets/img/Icon/Delete Pattern.svg'},

  {SourceOperator: 'Mytel', Destination: 'MYTEL', ServiceType:'Pay To', DateTime:'Fri, 09-Jun-2021, 12:10:20',action:'assets/img/Icon/Delete Pattern.svg'},
  
];
