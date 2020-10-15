import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDataService } from 'src/app/patient-data.service';
import { Patient } from '../view-patients/view-patients.component';

@Component({
  selector: 'app-register-patients',
  templateUrl: './register-patients.component.html',
  styleUrls: ['./register-patients.component.css']
})
export class RegisterPatientsComponent implements OnInit {
  patientID:number
  patient:Patient

  constructor(private patientService: PatientDataService,
              private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.patientID = this.route.snapshot.params['patientID'];
    // this.patientID = -1
    this.patient=new Patient(this.patientID,'',0,'','',0,'','','')

    if(this.patientID!=-1){
      this.patientService.getPatient(this.patientID).subscribe(
        data=>this.patient=data
      )
    }

  }

  savePatient(){
    if(this.patientID==-1) {
      this.patientService.createPatient(this.patient)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['view-patients'], {skipLocationChange: true})
          }
        )

    }
    else {
      this.patientService.updatePatient(this.patient, this.patientID)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['view-patients'], {skipLocationChange: true})
          }
        )
    }

  }

}
