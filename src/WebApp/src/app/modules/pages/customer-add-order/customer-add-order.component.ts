import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order-service/order.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer-add-order',
  templateUrl: './customer-add-order.component.html',
  styleUrls: ['./customer-add-order.component.css']
})
export class CustomerAddOrderComponent implements OnInit {

  orderForm: FormGroup;
  constructor(private router: Router, private formBuilder:FormBuilder, private orderServce: OrderService, private activatedRoute: ActivatedRoute, private location:Location) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      itemsPedido:['',[Validators.required]],
      descripcionPedido:[''],
      direccionEntrega:['',[Validators.required]]
    })
  }



  onSubmit() {
    const newCourier={
        id : undefined,
        idCliente: this.activatedRoute.snapshot.paramMap.get('customerId'),
        idRepartidorAsignado: 'Por definir',
        descripcionPedido: this.orderForm.controls['descripcionPedido'].value,
        itemsPedido: this.orderForm.controls['itemsPedido'].value,
        direccionEntrega: this.orderForm.controls['direccionEntrega'].value,
        pedidoStatus: "En espera",    
        notasEntrega:'' 
    }
    this.orderServce.addOrder(newCourier).subscribe();
    this.orderForm.reset();
    this.location.back();
  }

}
