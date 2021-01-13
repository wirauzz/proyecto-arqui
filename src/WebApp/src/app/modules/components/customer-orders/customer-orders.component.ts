import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order-service/order.service'
import { Order } from 'src/app/models/orders';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  orders:Order[];
  @Input() customer:String
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders.filter(c => c.idCliente == this.customer);
    })
  }

  onDelete(id:number){
    this.orders = this.orders.filter(o => o.id != id);
    this.orderService.removeOrder(id).subscribe();
  }

}
