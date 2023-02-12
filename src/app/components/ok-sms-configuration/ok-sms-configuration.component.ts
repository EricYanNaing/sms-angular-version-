import { OnInit, Component, ViewChild, ViewEncapsulation  ,HostListener,   } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-ok-sms-configuration',
  templateUrl: './ok-sms-configuration.component.html',
  styleUrls: ['./ok-sms-configuration.component.scss']
})
export class OkSmsConfigurationComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  radioBtn: any;
  radios: string[] = ['Send Now', 'Schedule', 'Custom'];
  sms_service_type:string ='';
}
