import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDataService } from 'src/app/patient-data.service';
import { LTillness, STillness } from '../view-allmedical/view-allmedical.component';
import { Patient } from '../view-patients/view-patients.component';

@Component({
  selector: 'app-view-medical',
  templateUrl: './view-medical.component.html',
  styleUrls: ['./view-medical.component.css']
})
export class ViewMedicalComponent implements OnInit {
  patients:Patient
  patientID:number
  stillnesses:STillness[]
  ltillnesses:LTillness[]

  constructor(private patientService: PatientDataService,
              private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.patientID = this.route.snapshot.params['patientID'];

    this.patientService.retrieveSTillness(this.patientID).subscribe(
      data=>this.stillnesses=data
      )

    this.patientService.retrieveLTillness(this.patientID).subscribe(
      data=>this.ltillnesses=data
      )

      this.patientService.getPatient(this.patientID).subscribe(
        data=>this.patients=data
      )

  }

  generateMedicalReport(patientID){
    this.router.navigate(['medical-report',patientID], {skipLocationChange: true})
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
