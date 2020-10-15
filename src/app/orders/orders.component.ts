import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersDataService } from '../orders-data.service';

export class orders {
  constructor(
  public id:number,
  public medicine:string,
  public date :string,
  public sname:string,
  public smobile:string,
  public type:string,
  public quantity:number,
  public status:string
  ){

  }
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderss: orders[]
  message:String

  filters = {
    keyword: ''
  }

  constructor(private ordersService:OrdersDataService,
              private router: Router) { }

  ngOnInit(){

    this.refreshOrderss()

  }

  refreshOrderss(){
    this.ordersService.retrieveAllOrderss().subscribe(
      
      response => {
        console.log(response);
        this.orderss = response;
      }
    )
  }



  deleteOrders(id){
    this.ordersService.deleteOrders(id).subscribe(
      response => {
        console.log(response);
        this.message = 'Sucessfully deleted!'
        this.refreshOrderss()

      }
    )
  }

  updateOrders(id){
    this.router.navigate(['orders',id])
  }

  addOrders(){
    this.router.navigate(['orders',-1])
  }

  navigateReport(){
    this.router.navigate(['details'])
  }


  searchOrders(){
    this.ordersService.retrieveAllOrderss().subscribe(
      data => this.orderss = this.search(data)
    )
  }
  search(orderss: orders[]) {
    return orderss.filter((e) => {
      return e.medicine.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }

}
