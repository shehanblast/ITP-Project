import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientDataService } from 'src/app/patient-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

export class Patient {
  constructor(
  public patientID: number,
  public patientName: string,
  public age: number,
  public dob: string,
  public address: string,
  public telephoneNo: number,
  public email: string,
  public gender: string,
  public ageGroup: string
  ) {

  }
}

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {
  patients: Patient[]
  message:String

  log:String = "";
  patientview: boolean = false;

  constructor(private patientService: PatientDataService,
              private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {

    this.log = this.hardcodedAuthenticationService.isAdmin();

    if(this.log == "dd" || this.log == "ss"){
      this.patientview = true;
    }

    this.refreshPatients()

  }

  refreshPatients(){
    this.patientService.retrieveAllPatients().subscribe(
      response => {
        console.log(response);
        this.patients = response;
      }
    )
  }

  deletePatient(patientID){
    this.patientService.deletePatient(patientID).subscribe(
      response => {
        console.log(response);
        this.message = 'Sucessfully deleted!'
        this.refreshPatients()

      }
    )
  }

  updatePatient(patientID){
    this.router.navigate(['register-patients',patientID], {skipLocationChange: true})
  }

  insertmedical(patientID)
  {
      this.router.navigate(['insert-medical',patientID,-1], {skipLocationChange: true})
  }

  insertmedicallt(patientID)
  {
    this.router.navigate(['insert-medicallt',patientID,-1], {skipLocationChange: true})

  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
