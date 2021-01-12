import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from 'src/app/services/Customer-service/Customer.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-customer-page',
  templateUrl: './add-customer-page.component.html',
  styleUrls: ['./add-customer-page.component.css']
})

export class AddCustomerPageComponent implements OnInit {
  
  customerForm: FormGroup

  constructor(private customerService: CustomerService, private router: Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      firstName:['', [Validators.required, Validators.maxLength(10), Validators.minLength(2)]],
      lastName:['',  [Validators.required, Validators.maxLength(10), Validators.minLength(2)]],
      email:['', [Validators.required, Validators.email]],
      CI:['', [Validators.required, Validators.min(1),Validators.maxLength(9), Validators.minLength(1)]]
    })
  }

  onSubmit() {
    const newCustomer={
        _id : undefined,
        ci : this.customerForm.controls['CI'].value,
        firstName:this.customerForm.controls['firstName'].value,
        lastName:this.customerForm.controls['lastName'].value,
        email:this.customerForm.controls['email'].value,
        __v:undefined
    }
    this.customerService.addCustomer(newCustomer).subscribe();
    this.customerForm.reset();
    this.router.navigateByUrl('/clientes');
  }


}
