import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order-service/order.service'
import { Order } from 'src/app/models/orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders
    })
  }

  onDelete(id:number){
    this.orders = this.orders.filter(o => o.id != id);
    this.orderService.removeOrder(id).subscribe();
  }

  onDecline(id:number){
    var order = this.orders.find(order => order.id== id)
    order.pedidoStatus = "Rechazado"
    this.orderService.edtiOrder(order).subscribe()
  }

  onConfirm(id:number){
    var order = this.orders.find(order => order.id== id)
    order.pedidoStatus = "Aceptado"
    this.orderService.edtiOrder(order).subscribe()
  }
}
