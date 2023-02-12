import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { IndividualEmailListingFilterComponent } from 'src/app/components/modal/individual-email-listing-filter/individual-email-listing-filter.component';
import { IndividualEmailDetailSingleComponent } from 'src/app/components/modal/individual-email-detail-single/individual-email-detail-single.component';

export interface PeriodicElement {
  sourceEmailType: string;
  sourceEmailAddress: string;
  destinationEmailAddress: string;
  messageInEng: string;
  messageInMM: string;
  sendType: string;
  subject: string;
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
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },
  {sourceEmailType: 'Default Email', sourceEmailAddress: 'cgm@gmail.com', destinationEmailAddress: 'ok$taxi@gmail.com', messageInEng: 'Hi! Mingalar Par',
  messageInMM:'ဟိုင်း မင်္ဂလာပါ', sendType: 'Schedule', subject: 'Promotion',frequency: 'Daily',frequencyCount: 2,startDate: 'Fri, 12-June-2021', endDate:'Mon, 23-July-2021',
  startTime:'11:20',endTime:'12:22',view:'assets/img/Icon/Eye.svg', attachFile:'assets/img/Icon/download.svg' },

];
@Component({
  selector: 'app-individual-email-listing',
  templateUrl: './individual-email-listing.component.html',
  styleUrls: ['./individual-email-listing.component.scss']
})
export class IndividualEmailListingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['sourceEmailType','sourceEmailAddress','destinationEmailAddress','messageInEng','messageInMM','sendType',
  'subject','frequency','frequencyCount','startDate','endDate','startTime','endTime','view','attachFile'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    this.dialog.open(IndividualEmailListingFilterComponent, {
      width: '950px',
      data: {}
    });
  }

  individualEmail() {
    this.dialog.open(IndividualEmailDetailSingleComponent, {
      width: '950px',
      data: {}
    });
  }
}
