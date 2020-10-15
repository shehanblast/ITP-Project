import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDataService } from 'src/app/patient-data.service';
import { LTillness, STillness } from '../view-allmedical/view-allmedical.component';
import { Patient } from '../view-patients/view-patients.component';
import * as html2pdf from 'html2pdf.js'


@Component({
  selector: 'app-medical-report',
  templateUrl: './medical-report.component.html',
  styleUrls: ['./medical-report.component.css']
})
export class MedicalReportComponent implements OnInit {
  patients:Patient
  patientID:number
  stillnesses:STillness[]
  ltillnesses:LTillness[]
  currentDate = new Date();

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

  onExportClick(){

    const options = {
      filename : 'medical_report.pdf',
      image : {type : 'jpeg'},
      html2canvas : {},
      jsPDF : {orientation : 'portrait'}

    }
    
    const content : Element = document.getElementById('medical-report-download');
    
    html2pdf()
    .from(content)
    .set(options)
    .save()
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
