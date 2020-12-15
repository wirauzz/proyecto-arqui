import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/Customer-service/Customer.service'
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:Customer[];
  customer:Customer;
  constructor(private CustomerService: CustomerService) { }

  ngOnInit() {
    this.CustomerService.getCustomers().subscribe(
      customers => {
        this.customers = customers;
      }
    )
  }
}
