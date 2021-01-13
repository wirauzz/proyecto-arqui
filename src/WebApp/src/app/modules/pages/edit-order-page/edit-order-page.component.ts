import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourierService } from 'src/app/services/courier-service/courier.service';
import { OrderService } from 'src/app/services/order-service/order.service';

@Component({
  selector: 'app-edit-order-page',
  templateUrl: './edit-order-page.component.html',
  styleUrls: ['./edit-order-page.component.css']
})
export class EditOrderPageComponent implements OnInit {

  orderForm: FormGroup;
  orderId:number;
  constructor(private router: Router, private formBuilder:FormBuilder, private orderServce: OrderService, private courierSerivce:CourierService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.orderId = +this.activatedRoute.snapshot.paramMap.get('orderId')

    this.orderServce.getOrder(this.orderId).subscribe( currentOrder =>{
      this.orderForm = this.formBuilder.group({
        idCliente:[currentOrder.idCliente, [Validators.required]],
        idRepartidorAsignado:[currentOrder.idRepartidorAsignado,[Validators.required]],
        descripcionPedido:[currentOrder.descripcionPedido,[Validators.required]],
        itemsPedido:[currentOrder.itemsPedido,[Validators.required]],
        direccionEntrega:[currentOrder.direccionEntrega,[Validators.required]],
        pedidoStatus:[currentOrder.pedidoStatus,[Validators.required]],
        notasEntrega:[currentOrder.notasEntrega,[Validators.required]]
      })
    });
   
  }


  onSubmit() {
    const newOrder={
        id : undefined,
        idCliente: this.orderForm.controls['idCliente'].value,
        idRepartidorAsignado: this.orderForm.controls['idRepartidorAsignado'].value,
        descripcionPedido: this.orderForm.controls['descripcionPedido'].value,
        itemsPedido: this.orderForm.controls['itemsPedido'].value,
        direccionEntrega: this.orderForm.controls['direccionEntrega'].value,
        pedidoStatus: this.orderForm.controls['pedidoStatus'].value,    
        notasEntrega:undefined 
    }
    this.orderServce.edtiOrder(newOrder).subscribe();
    this.orderForm.reset();
    this.router.navigateByUrl('/pedidos');
  }
}
