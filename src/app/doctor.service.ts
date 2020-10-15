import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from './doctors/doctors.component';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  retrieveAllDoctors(username){
    return this.http.get<Doctor[]>(`http://localhost:8080/jpa/users/${username}/doctors`);
  }

  deleteDoctor(username,id){
    return this.http.delete(`http://localhost:8080/jpa/users/${username}/doctors/${id}`);
  }

  retrieveDoctor(username,id){
    return this.http.get<Doctor>(`http://localhost:8080/jpa/users/${username}/doctors/${id}`);
  }

  updateDoctor(username,id, doctor){
    return this.http.put(`http://localhost:8080/jpa/users/${username}/doctors/${id}`,doctor);
  }

  createDoctor(username,doctor){
    return this.http.post(`http://localhost:8080/jpa/users/${username}/doctors`,doctor);
  }

}
