import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDataService } from 'src/app/patient-data.service';
import { STillness } from '../view-allmedical/view-allmedical.component';

@Component({
  selector: 'app-insert-medical',
  templateUrl: './insert-medical.component.html',
  styleUrls: ['./insert-medical.component.css']
})
export class InsertMedicalComponent implements OnInit {
  patientID:number
  stID:number
  stillness:STillness

  constructor(private patientService: PatientDataService,
              private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit() {

    this.patientID = this.route.snapshot.params['patientID'];
   
    this.stID = this.route.snapshot.params['stID'];
    this.stillness=new STillness(this.stID,this.patientID,'','')

    if(this.stID!=-1){
      this.patientService.getSTillness(this.stID).subscribe(
        data=>this.stillness=data
      )
    }

  }

  saveSTillness(){
    if(this.stID==-1) {
      this.patientService.createSTillness(this.stillness)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['view-medical',this.patientID], {skipLocationChange: true})
          }
        )

    }
    else {
      this.patientService.updateSTillness(this.stID,this.stillness)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['view-medical'], {skipLocationChange: true})
          }
        )
    }
  }

}
