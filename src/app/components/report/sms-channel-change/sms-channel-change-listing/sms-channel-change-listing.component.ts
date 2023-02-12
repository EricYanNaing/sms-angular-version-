import { AfterViewInit, Component, ViewChild, ViewEncapsulation  } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { SmsChannelChangeReportFilterComponent } from 'src/app/components/modal/sms-channel-change-report-filter/sms-channel-change-report-filter.component';
import {MatTableDataSource} from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-sms-channel-change-listing',
  templateUrl: './sms-channel-change-listing.component.html',
  styleUrls: ['./sms-channel-change-listing.component.scss']
})
export class SmsChannelChangeListingComponent implements AfterViewInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SmsChannelChangeReportFilterComponent, {
      width: '850px',
      data: {}
    });
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['companyName', 'SourceOperator', 'designationOperator','smsService', 'osType','dateTime'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  companyName:string;
  SourceOperator: string;
  designationOperator: string;
  smsService: string;
  osType:string;
  dateTime:string;
 }


const ELEMENT_DATA: PeriodicElement[] = [
  {companyName:'CGM',
  SourceOperator:'MPT',
  designationOperator:'TELENOR',
  smsService:'Pay To',
  osType:'Both',
  dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
  SourceOperator:'MPT',
  designationOperator:'TELENOR',
  smsService:'Pay To',
  osType:'Both',
  dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},


{companyName:'CGM',
  SourceOperator:'MPT',
  designationOperator:'TELENOR',
  smsService:'Pay To',
  osType:'Both',
  dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},


{companyName:'CGM',
  SourceOperator:'MPT',
  designationOperator:'TELENOR',
  smsService:'Pay To',
  osType:'Both',
  dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},

{companyName:'CGM',
SourceOperator:'MPT',
designationOperator:'TELENOR',
smsService:'Pay To',
osType:'Both',
dateTime:'Fri,12-Jun-2021, 12:10:20',
},




    
];


