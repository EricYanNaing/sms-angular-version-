import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EmailConfigurationListingFilterComponent } from 'src/app/components/modal/email-configuration-listing-filter/email-configuration-listing-filter.component';


export interface PeriodicElement {
  sourceEmailAddress: string;
  verify: string;
  active: string;
  action: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },
  {sourceEmailAddress: 'cgm@gmail.com', verify: 'No', active: 'No', action:'assets/img/Icon/Edit Pattern.svg' },



];

@Component({
  selector: 'app-email-configuration-listing',
  templateUrl: './email-configuration-listing.component.html',
  styleUrls: ['./email-configuration-listing.component.scss']
})
export class EmailConfigurationListingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['sourceEmailAddress','verify','active','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openDialog() {
    this.dialog.open(EmailConfigurationListingFilterComponent, {
      width: '950px',
      data: {}
    });
  }
  
}
