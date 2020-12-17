import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/services/Customer-service/Customer.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-customer-page',
  templateUrl: './add-customer-page.component.html',
  styleUrls: ['./add-customer-page.component.css']
})

export class AddCustomerPageComponent implements OnInit {
  
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    CI: new FormControl('')    
  });

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const newCustomer={
        _id : undefined,
        ci : this.form.controls['CI'].value,
        firstName:this.form.controls['firstName'].value,
        lastName:this.form.controls['lastName'].value,
        email:this.form.controls['email'].value,
        __v:undefined
    }
    this.customerService.addCustomer(newCustomer).subscribe();
    this.form.reset();
    this.router.navigateByUrl('/clientes');
  }


}
