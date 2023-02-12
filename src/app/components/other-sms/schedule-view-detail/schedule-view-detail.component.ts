import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleViewDetailFilterComponent } from '../../modal/schedule-view-detail-filter/schedule-view-detail-filter.component';
import { ScheduleViewDetailActionComponent } from '../../modal/schedule-view-detail-action/schedule-view-detail-action.component';


export interface PeriodicElement {
  fileRefNo: number;
  fileName: string;
  companyName: string;
  operator: string;
  userType: string;
  mobileNoOrCount: string;
  smsInEng: string;
  smsInZaw: string;
  smsInUni: string;
  frequency: string;
  frequencyCount: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  status: string;
  action: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },
  
  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' },

  {fileRefNo: 2021879806,fileName: 'File Name 1',companyName: 'Other',operator:'MPT',userType:'Non OK$ TopUp Customer',mobileNoOrCount:'+95 09877987123',smsInEng: 'Hi, Mingalar par',
   smsInZaw:'ဟိုင္း မဂၤလာပါ',smsInUni:'ဟိုင်း မင်္ဂလာပါ',frequency:'Daily',frequencyCount:5,startDate:'Fri,12-Jun-2021',endDate:'Mon,23-Jan-2021',startTime: '09:10:20',endTime:'07:45:28',
  status:'Error',action:'assets/img/Icon/Edit Pattern.svg' }
];

@Component({
  selector: 'app-schedule-view-detail',
  templateUrl: './schedule-view-detail.component.html',
  styleUrls: ['./schedule-view-detail.component.scss']
})
export class ScheduleViewDetailComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['fileRefNo', 'fileName', 'companyName', 'operator','userType','mobileNoOrCount',
  'smsInEng','smsInZaw','smsInUni','frequency','frequencyCount','startDate','endDate','startTime','endTime','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    this.dialog.open(ScheduleViewDetailFilterComponent, {
      width: '950px',
      data: {}
    });
  }

  openDialog2() {
    this.dialog.open(ScheduleViewDetailActionComponent, {
      width: '950px',
      data: {}
    });
  }
}
