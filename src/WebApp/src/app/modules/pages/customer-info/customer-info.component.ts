import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/Customer-service/Customer.service'
import {ActivatedRoute} from '@angular/router';
import { Customer } from 'src/app/models/customer';
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {


  customer:Customer;
  customerId:string;

  constructor(private customerService:CustomerService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.customerId = this.activatedRoute.snapshot.paramMap.get('customerId')
    this.customerService.getCustomer(this.customerId).subscribe(customer =>{
      this.customer = customer
    })
  }

}
