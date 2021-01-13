import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/orders';
import { OrderService } from 'src/app/services/order-service/order.service';

@Component({
  selector: 'app-courier-orders',
  templateUrl: './courier-orders.component.html',
  styleUrls: ['./courier-orders.component.css']
})
export class CourierOrdersComponent implements OnInit {

  orders:Order[];
  courier:String;

  constructor(private orderService:OrderService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.courier = this.activatedRoute.snapshot.paramMap.get('courierId')
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders.filter(order => order.pedidoStatus == "Aceptado" || order.idRepartidorAsignado==this.courier);
    })
  }


  addToQueue(id: number){
    var order = this.orders.find(order => order.id== id)
    order.pedidoStatus = "Entregado"
    order.idRepartidorAsignado = this.courier
    this.orderService.edtiOrder(order).subscribe()
  }

}
