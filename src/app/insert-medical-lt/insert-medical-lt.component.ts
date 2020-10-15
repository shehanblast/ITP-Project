import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDataService } from 'src/app/patient-data.service';
import { LTillness } from '../view-allmedical/view-allmedical.component';

@Component({
  selector: 'app-insert-medical-lt',
  templateUrl: './insert-medical-lt.component.html',
  styleUrls: ['./insert-medical-lt.component.css']
})
export class InsertMedicalLtComponent implements OnInit {
  patientID:number
  ltID:number
  ltillness:LTillness

  constructor(private patientService: PatientDataService,
              private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.patientID = this.route.snapshot.params['patientID'];
    
    this.ltID = this.route.snapshot.params['ltID'];
    this.ltillness=new LTillness(this.ltID,this.patientID,'','')

    if(this.ltID!=-1){
      this.patientService.getLTillness(this.ltID).subscribe(
        data=>this.ltillness=data
      )
    }

  }

  saveLTillness(){
    if(this.ltID==-1) {
      this.patientService.createLTillness(this.ltillness)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['view-medical',this.patientID], {skipLocationChange: true})
          }
        )

    }
    else {
      this.patientService.updateLTillness(this.ltID,this.ltillness)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['view-medical'], {skipLocationChange: true})
          }
        )
    }
  }

}
