import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CourierService } from 'src/app/services/courier-service/courier.service';
import { CustomerService } from 'src/app/services/Customer-service/Customer.service';
import { OrderService } from 'src/app/services/order-service/order.service';

import {Router} from '@angular/router';
import { Courier } from 'src/app/models/courier';
import { Customer } from 'src/app/models/Customer';


@Component({
  selector: 'app-add-order-page',
  templateUrl: './add-order-page.component.html',
  styleUrls: ['./add-order-page.component.css']
})
export class AddOrderPageComponent implements OnInit {

  customers:Customer[];
  couriers:Courier[];
  orderForm: FormGroup;

  constructor(private customerService: CustomerService,private router: Router, private formBuilder:FormBuilder, private orderServce: OrderService, private courierSerivce:CourierService) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      idCliente:['', [Validators.required]],
      idRepartidorAsignado:['',[Validators.required]],
      descripcionPedido:['',[Validators.required]],
      itemsPedido:['',[Validators.required]],
      direccionEntrega:['',[Validators.required]],
      pedidoStatus:['Automovil',[Validators.required]],
      notasEntrega:['',[Validators.required]]
    })
    this.customerService.getCustomers().subscribe( customers => {
      this.customers = customers;
    })
    this.courierSerivce.getCouriers().subscribe( customers => {
      this.couriers = customers;
    })
  }


  onSubmit() {
    const newCourier={
        id : undefined,
        idCliente: this.orderForm.controls['idCliente'].value,
        idRepartidorAsignado: this.orderForm.controls['idRepartidorAsignado'].value,
        descripcionPedido: this.orderForm.controls['descripcionPedido'].value,
        itemsPedido: this.orderForm.controls['itemsPedido'].value,
        direccionEntrega: this.orderForm.controls['direccionEntrega'].value,
        pedidoStatus: this.orderForm.controls['pedidoStatus'].value,    
        notasEntrega:undefined 
    }
    this.orderServce.addOrder(newCourier).subscribe();
    this.orderForm.reset();
    this.router.navigateByUrl('/pedidos');
  }

}
