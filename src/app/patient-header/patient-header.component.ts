import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-patient-header',
  templateUrl: './patient-header.component.html',
  styleUrls: ['./patient-header.component.css']
})
export class PatientHeaderComponent implements OnInit {
  log:String = "";
  patient: boolean = false;

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {

    this.log = this.hardcodedAuthenticationService.isAdmin();
    if(this.log == 'ss' || this.log =="dd"){
      this.patient = true;
    }

  }

  addPatient(){
    this.router.navigate(['register-patients',-1], {skipLocationChange: true})
  }

}
