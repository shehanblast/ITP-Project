import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersDataService } from '../orders-data.service';
import {orders} from '../orders/orders.component';

@Component({
  selector: 'app-orderss',
  templateUrl: './orderss.component.html',
  styleUrls: ['./orderss.component.css']
})
export class OrderssComponent implements OnInit {
  

  id:number
  orders:orders

  constructor(private ordersService:OrdersDataService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    
    this.orders =new orders(0,"","","","","",0,"");
    
  
    

    if(this.id!=-1){
      this.ordersService.retrieveOrders(this.id).subscribe(
        data=>this.orders=data
      )
    }

  }

  saveOrders(){
    if(this.id!=-1) {
      this.ordersService.createOrders(this.orders)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['orderss'])
          }
        )

    }
    else {
      this.ordersService.updateOrders(this.id,this.orders)
        .subscribe(
          data=>{
            console.log(data)
            this.router.navigate(['orderss'])
          }
        )
    }

  }
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  isValidFormSubmitted = false;  
   
    
    
  onFormSubmit(form: NgForm) {  
    this.isValidFormSubmitted = false;  
    if (form.invalid) {  
       return;  
    }  
    this.isValidFormSubmitted = true;  
    form.resetForm();  
   }  

   public unit:number;
   public quantity:number;
   public total:number;

   multiply(){
     this.total = this.unit * this.quantity;
   }


}
