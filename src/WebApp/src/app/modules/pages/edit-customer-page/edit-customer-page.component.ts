import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/services/Customer-service/Customer.service'
import {Router, ActivatedRoute} from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-edit-customer-page',
  templateUrl: './edit-customer-page.component.html',
  styleUrls: ['./edit-customer-page.component.css']
})
export class EditCustomerPageComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    CI: new FormControl('')    
  });

  customer:Customer

  constructor(private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.customerService.getCustomer(this.activatedRoute.snapshot.paramMap.get('customerId')).subscribe(customer => {
      this.form.controls['firstName'].setValue( customer.firstName);
      this.form.controls['lastName'].setValue( customer.lastName);
      this.form.controls['email'].setValue( customer.email);
      this.form.controls['CI'].setValue( customer.ci);}
    )
  }

  onSubmit() {
    const newCustomer={
        _id : this.activatedRoute.snapshot.paramMap.get('customerId'),
        ci : this.form.controls['CI'].value,
        firstName:this.form.controls['firstName'].value,
        lastName:this.form.controls['lastName'].value,
        email:this.form.controls['email'].value,
        __v:undefined
    }
    this.customerService.edtiCustomer(newCustomer).subscribe();
    this.form.reset();
    this.router.navigateByUrl('/clientes');
  }
}
