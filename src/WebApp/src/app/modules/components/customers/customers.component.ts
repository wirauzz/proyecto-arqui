import { Component, OnInit, } from '@angular/core';
import { CustomerService } from 'src/app/services/Customer-service/Customer.service'
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers:Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe( customers => {
        this.customers = customers;
      }
    )
  }

  onDelete(id:string){
    this.customers = this.customers.filter(c => c._id != id);
    this.customerService.removeCustomer(id).subscribe();
  }
}
