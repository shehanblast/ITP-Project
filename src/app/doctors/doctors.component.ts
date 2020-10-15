import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

export class Doctor {
  constructor(
    public id:number,
    public name:string,
    public specialization:string,
    public email:string,
    public a_time:string,
    public patientsNumber:string,

    
  ){

  }
}

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[]
  message:String

  constructor(private doctorService:DoctorService,
              private router: Router) { }

  ngOnInit(): void 
  {
    this.refreshDoctors()
  }

  refreshDoctors(){
    this.doctorService.retrieveAllDoctors('in28minutes').subscribe(
      response => {
        console.log(response);
        this.doctors = response;
      }
    )
  }

  deleteDoctor(id){
    this.doctorService.deleteDoctor('in28minutes',id).subscribe(
      response => {
        console.log(response);
        this.message = 'Sucessfully deleted!'
        this.refreshDoctors()

      }
    )
  }

  updateDoctor(id){
    this.router.navigate(['doctor',id])
  }

  addDoctor(){
    this.router.navigate(['doctor',-1])
  }

}
