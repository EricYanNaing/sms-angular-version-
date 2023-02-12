import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-set-sms-price-listing',
  templateUrl: './set-sms-price-listing.component.html',
  styleUrls: ['./set-sms-price-listing.component.scss']
})
export class SetSmsPriceListingComponent implements OnInit {

  @ViewChild('price') inputName:any; // accessing the reference element

  handleClear(){
      // clearing the value
    this.inputName.nativeElement.value = '';
  }

  constructor() {

   }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Mobile', 'SmsMethod', 'price', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  Mobile: string;

  SmsMethod: string;
  price: string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {Mobile: 'MPT', SmsMethod: 'On Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Telenor', SmsMethod: 'Off Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Ooredoo', SmsMethod: 'On Net', price:'',  action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Mytel', SmsMethod: 'Off Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'MEC Tel', SmsMethod: 'On Net', price:'',  action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'MPT', SmsMethod: 'On Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Telenor', SmsMethod: 'Off Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Ooredoo', SmsMethod: 'On Net', price:'',  action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Mytel', SmsMethod: 'Off Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'MEC Tel', SmsMethod: 'On Net', price:'',  action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'MPT', SmsMethod: 'On Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Telenor', SmsMethod: 'Off Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Ooredoo', SmsMethod: 'On Net', price:'',  action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Mytel', SmsMethod: 'Off Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'MEC Tel', SmsMethod: 'On Net', price:'',  action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'MPT', SmsMethod: 'On Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Telenor', SmsMethod: 'Off Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Ooredoo', SmsMethod: 'On Net', price:'',  action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Mytel', SmsMethod: 'Off Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'MEC Tel', SmsMethod: 'On Net', price:'',  action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'MPT', SmsMethod: 'On Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Telenor', SmsMethod: 'Off Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Ooredoo', SmsMethod: 'On Net', price:'',  action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'Mytel', SmsMethod: 'Off Net', price:'', action:'assets/img/Icon/Edit Pattern.svg'},

  {Mobile: 'MEC Tel', SmsMethod: 'On Net', price:'',  action:'assets/img/Icon/Edit Pattern.svg'},
  

 
];

