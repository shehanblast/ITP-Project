import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctors/doctors.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  id:number
  doctor:Doctor

  constructor(private doctorService:DoctorService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() 
  {

    this.id = this.route.snapshot.params['id'];
    this.doctor=new Doctor(this.id,'','','','','')

    if(this.id!=-1){
      this.doctorService.retrieveDoctor('in28minutes',this.id).subscribe(
        data=>this.doctor=data
      )
    }

  }

  saveDoctor(){
    if(this.id==-1) {
      this.doctorService.createDoctor('in28minutes',this.doctor)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['doctors'])
          }
        )

    }
    else {
      this.doctorService.updateDoctor('in28minutes',this.id,this.doctor)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['doctors'])
          }
        )
    }

  }

}
