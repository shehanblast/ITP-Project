import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientDataService } from 'src/app/patient-data.service';

@Component({
  selector: 'app-search-patients',
  templateUrl: './search-patients.component.html',
  styleUrls: ['./search-patients.component.css']
})
export class SearchPatientsComponent implements OnInit {
  patientName:String
  currentDate = new Date();

  constructor(private patientService: PatientDataService,
              private router: Router) { }

  ngOnInit() {
  }

  findPatient(patientName)
  {
      this.router.navigate(['search-patients',patientName], {skipLocationChange: true})
  }

}
