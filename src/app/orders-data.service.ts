import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { orders } from './orders/orders.component';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {

  constructor(private http:HttpClient) {}

  retrieveAllOrderss(){
    return this.http.get<orders[]>(`http://localhost:8080/orders`);
  }

  deleteOrders(id){
    return this.http.delete(`http://localhost:8080/orders/${id}`);
  }

  retrieveOrders(id){
    return this.http.get<orders>(`http://localhost:8080/orders/${id}`);
  }

  updateOrders(id,orders){
    return this.http.put(`http://localhost:8080/orders/${id}`,orders);
  }

  createOrders(orders){
    return this.http.post(`http://localhost:8080/orders`,orders);
  }

}
