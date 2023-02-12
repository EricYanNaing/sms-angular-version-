import { AfterViewInit, Component, ViewChild, ViewEncapsulation  ,HostListener,   } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { ConfirmAlertComponent } from 'src/app/components/modal/confirm-alert/confirm-alert.component';
import { Router,Event, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-filter-sms-white-list',
  templateUrl: './filter-sms-white-list.component.html',
  styleUrls: ['./filter-sms-white-list.component.scss']
})
export class FilterSmsWhiteListComponent implements   AfterViewInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();
  ContentTable:boolean =true;


  constructor(public router:Router,public dialog: MatDialog,private location: Location) {

  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmAlertComponent, {
      width: '550px',
           data: {
           message: 'Are you sure want to white List Pay To Service Type?',
           confirmButtonText: 'YES',
           cancelButtonText: 'NO',
           image: 'assets/img/Icon/Search.svg'  
          }
    });

    dialogRef.afterClosed().subscribe(result => {
       if(result) {
         this.router.navigate(['../auth/login']);
        }
       else {
        this.location.back()
       }
     });
  }

  displayedColumns: string[] = ['stop', 'account', 'ServiceType', 'operatorName', 'osType', 'osVersion', 'okApp', 'buildNumber','mobileNumber', 'noOfAcc','dateTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  sms_white_list:string='';
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  isShown: boolean | undefined;


  toggleShow() {

    this.isShown = true;
  }
  // ngOnInit(): void {
  //   this.logout();
  // }

  // logout(){
  //   const dialogRef = this.dialog.open(ConfirmAlertComponent, {
  //     width: '550px',
  //     data: {
  //       message: 'Do you sure want White List?',
  //       confirmButtonText: 'YES',
  //       cancelButtonText: 'NO',
  //       image: 'assets/img/Icon/Search.svg'  
  //     }
  //     });

      // dialogRef.afterClosed().subscribe(result => {
      //   if(result) {
      //     this.router.navigate(['../auth/login']);
      //   }
      //   else {
      //     this.location.back()
    //   //   }
    // });
  // }
}
  
  
  
  export interface PeriodicElement {
  stop: string;
  account: string;
  ServiceType: string;
  operatorName: string;
  osType: string;
  osVersion: string;
  okApp: string;
  buildNumber: string;
  mobileNumber:string;
  noOfAcc: string;
  dateTime: string;
  action: string;
  
  }
  
  
  const ELEMENT_DATA: PeriodicElement[] = [
  {stop: 'Destination', account: 'Personal', ServiceType: 'Gift Card', operatorName: 'MECTEL', osType: 'Android', osVersion: 'Android 10', okApp:'1.25.9', buildNumber:'105',mobileNumber:'099871234456', noOfAcc:'70',  dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/img/Icon/Edit Pattern.svg'},
  
  
  ];
  
