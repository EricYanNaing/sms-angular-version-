import { Component, OnInit } from '@angular/core';
import { UserTypeConstant } from 'src/app/core/constants/userType.constants';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-email-configuration-detail',
  templateUrl: './add-email-configuration-detail.component.html',
  styleUrls: ['./add-email-configuration-detail.component.scss']
})
export class AddEmailConfigurationDetailComponent implements OnInit {
  showPassword = false;
  login_form!: FormGroup;
  hide = true;
  doctorType = UserTypeConstant.DOCTOR;
  patientType = UserTypeConstant.PATIENT;
  selectedUserType = this.patientType;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeUserType(userType: any) {
    this.selectedUserType = userType;
  }

}
