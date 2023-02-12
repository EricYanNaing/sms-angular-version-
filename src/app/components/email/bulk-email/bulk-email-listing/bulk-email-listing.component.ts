import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BulkEmailFilterComponent } from 'src/app/components/modal/bulk-email-filter/bulk-email-filter.component';
import { BulkEmailDetailSingleComponent } from 'src/app/components/modal/bulk-email-detail-single/bulk-email-detail-single.component';
export interface PeriodicElement {
  fileRefNo: number;
  fileName: string;
  sourceEmailType: string;
  sourceEmailAddress: string;
  sendType: string;
  destinationEmailCount: number;
  frequency: string;
  frequencyCount: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  view: string;
  attachFile: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },

  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },

  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },

  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },

  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },


  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },


  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },

  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },

  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },

  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },{fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },{fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },{fileRefNo: 20218787686123, fileName: 'Name 1', sourceEmailType: 'Custom E-mail', sourceEmailAddress: 'gat@gmail.com',
  sendType: 'Schedule', destinationEmailCount: 10,frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },

];
@Component({
  selector: 'app-bulk-email-listing',
  templateUrl: './bulk-email-listing.component.html',
  styleUrls: ['./bulk-email-listing.component.scss']
})
export class BulkEmailListingComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['fileRefNo','fileName','sourceEmailType','sourceEmailAddress','sendType',
  'destinationEmailCount','frequency','frequencyCount','startDate','endDate','startTime','endTime','view','attachFile'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    this.dialog.open(BulkEmailFilterComponent, {
      width: '950px',
      data: {}
    });
  }

  bulkEmail() {
    this.dialog.open(BulkEmailDetailSingleComponent, {
      width: '950px',
      data: {}
    });
  }
}
