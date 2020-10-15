import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LTillness, STillness } from './view-allmedical/view-allmedical.component';
import { Patient } from './view-patients/view-patients.component';


@Injectable({
  providedIn: 'root'
})
export class PatientDataService {

  constructor(private http: HttpClient) { }

  retrieveAllPatients(){
    return this.http.get<Patient[]>(`http://localhost:8080/jpa/users/patients`);
  }

  deletePatient(patientID){
    return this.http.delete(`http://localhost:8080/jpa/users/patientdelete/${patientID}`);
  }

  getPatient(patientID){
    return this.http.get<Patient>(`http://localhost:8080/jpa/users/getpatient/${patientID}`);
  }

  retrievePatient(patientName){
    return this.http.get<Patient[]>(`http://localhost:8080/jpa/users/searchpatient/${patientName}`);
  }

  updatePatient(Patient, patientID){
    return this.http.put(`http://localhost:8080/jpa/users/patientupdate/${patientID}`,Patient);
  }

  createPatient(Patient){
    return this.http.post(`http://localhost:8080/jpa/users/insertpatient`,Patient);
  }

  retrievePatientByName(patientName){
    return this.http.get<Patient[]>(`http://localhost:8080/jpa/users/patients/${patientName}`);
  }



  createSTillness(stillness){
    return this.http.post(`http://localhost:8080/jpa/users/insertSTillness`,stillness);
  }

  createLTillness(ltillness){
    return this.http.post(`http://localhost:8080/jpa/users/insertLTillness`,ltillness);
  }

  updateLTillness(ltillness, ltID){
    return this.http.put(`http://localhost:8080/jpa/users/updateLTillness/${ltID}`,ltillness);
  }
  
  deleteLTillness(ltID){
    return this.http.delete(`http://localhost:8080/jpa/users/LTillnessdelete/${ltID}`);
  }

  retrieveLTillness(patientID){
    return this.http.get<LTillness[]>(`http://localhost:8080/jpa/users/getLTillness/ByPatientID/${patientID}`);
  }

  updateSTillness(stillness, stID){
    return this.http.put(`http://localhost:8080/jpa/users/updateSTillness/${stID}`,stillness);
  }
  
  deleteSTillness(stID){
    return this.http.delete(`http://localhost:8080/jpa/users/STillnessdelete/${stID}`);
  }

  retrieveSTillness(patientID){
    return this.http.get<STillness[]>(`http://localhost:8080/jpa/users/getSTillness/ByPatientID/${patientID}`);
  }

  getLTillness(ltID){
    return this.http.get<LTillness>(`http://localhost:8080/jpa/users/getLTillness/${ltID}`);
  }

  getSTillness(stID){
    return this.http.get<STillness>(`http://localhost:8080/jpa/users/getSTillness/${stID}`);
  }

  retrieveAllSTillnesses(){
    return this.http.get<STillness[]>(`http://localhost:8080/jpa/users/STillness`);
  }

  retrieveAllLTillnesses(){
    return this.http.get<LTillness[]>(`http://localhost:8080/jpa/users/LTillness`);
  }

}
