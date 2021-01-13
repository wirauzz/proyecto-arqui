import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/orders';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})

export class OrderService {

  orderUrl: string = 'http://localhost:56384/api/Pedidos';

  constructor(private http: HttpClient) { }
  
  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.orderUrl}`);
  }

  getOrder(idOrder:number): Observable<Order>{
    return this.http.get<Order>(`${this.orderUrl}/${idOrder}`);
  }

  addOrder(newOrder: Order): Observable<Order>{
    return this.http.post<Order>(this.orderUrl, newOrder, httpOptions);
  }

  edtiOrder(customer: Order):Observable<Order> {
    return this.http.put<Order>(`${this.orderUrl}/${customer.id}`,customer,httpOptions);
  }

  removeOrder(OrderId: number) {
    return this.http.delete(`${this.orderUrl}/${OrderId}`,httpOptions);
  }

}
