import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDataService } from 'src/app/patient-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Patient } from '../view-patients/view-patients.component';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  patients: Patient[]
  patientName: String

  log:String = "";
  patientview: boolean = false;

  constructor(private patientService: PatientDataService,
              private router: Router,
              private route:ActivatedRoute,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {

    this.log = this.hardcodedAuthenticationService.isAdmin();
    if(this.log == 'ss' || this.log =="dd"){
      this.patientview = true;
    }

    this.patientName = this.route.snapshot.params['patientName'];
              
    this.patientService.retrievePatient(this.patientName).subscribe(
      data=>this.patients=data
    )

  }

  viewMedicalRecords(patientID){
    this.router.navigate(['view-medical',patientID], {skipLocationChange: true})
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
