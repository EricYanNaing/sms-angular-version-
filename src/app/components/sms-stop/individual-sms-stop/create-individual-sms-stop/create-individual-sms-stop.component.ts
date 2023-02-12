import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-individual-sms-stop',
  templateUrl: './create-individual-sms-stop.component.html',
  styleUrls: ['./create-individual-sms-stop.component.scss']
})
export class CreateIndividualSmsStopComponent implements OnInit {
 
  mobileNumberFields = [
    {
      mobileNumberValue: ""
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
