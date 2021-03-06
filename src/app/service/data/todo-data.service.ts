import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HelloWorldBean} from './welcome-data.service';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(){
    return this.http.get<Todo[]>(`http://localhost:8080/jpa/users//todos`);
  }

  deleteTodo(username,id){
    return this.http.delete(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }

  retrieveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }

  updateTodo(username,id, todo){
    return this.http.put(`http://localhost:8080/jpa/users/${username}/todos/${id}`,todo);
  }

  createTodo(username,todo){
    return this.http.post(`http://localhost:8080/jpa/users/${username}/todos`,todo);
  }

  generateReport(){
    return this.http.get('http://localhost:8080/report/pdf');
  }

}
