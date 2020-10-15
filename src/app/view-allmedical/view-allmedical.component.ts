import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDataService } from 'src/app/patient-data.service';

export class STillness {
  constructor(
  public stID:number,
  public patientID:number,
  public stName:String,
  public stChanneldate:String
 
) {

  }
}

export class LTillness {
    constructor(
    public ltID:number,
    public patientID:number,
    public ltName:String,
    public ltChanneldate:String
   
    ) {
  
    }
}

@Component({
  selector: 'app-view-allmedical',
  templateUrl: './view-allmedical.component.html',
  styleUrls: ['./view-allmedical.component.css']
})
export class ViewAllmedicalComponent implements OnInit {
  stillnesses:STillness[]
  ltillnesses:LTillness[]

  constructor(private patientService: PatientDataService,
              private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.patientService.retrieveAllSTillnesses().subscribe(
      response => {
        console.log(response);
        this.stillnesses = response;
      }
    )

    this.patientService.retrieveAllLTillnesses().subscribe(
      response => {
        console.log(response);
        this.ltillnesses = response;
      }
    )

  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
