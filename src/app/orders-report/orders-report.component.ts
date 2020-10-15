import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { OrdersDataService } from '../orders-data.service';

export class orders{
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
  selector: 'app-orders-report',
  templateUrl: './orders-report.component.html',
  styleUrls: ['./orders-report.component.css']
})
export class OrdersReportComponent implements OnInit {

  orderss: orders[]

  constructor(private ordersService:OrdersDataService) { }

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
  onExportClick(){
    const options = {
      filename: 'OrderDetails_Report.pdf',
      image: {type:'jpeg'},
      html2canvas:{},
      jsPDF:{ orientation:'landscape' }
    };

    const content:Element = document.getElementById('element-to-export');

    html2pdf()
    .from(content)
    .set(options)
    .save();
  }

}
