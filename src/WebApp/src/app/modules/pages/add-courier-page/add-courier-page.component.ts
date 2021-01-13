import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CourierService } from 'src/app/services/courier-service/courier.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-courier-page',
  templateUrl: './add-courier-page.component.html',
  styleUrls: ['./add-courier-page.component.css']
})
export class AddCourierPageComponent implements OnInit {


  courierForm: FormGroup

  constructor(private courierServicee: CourierService, private router: Router, private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.courierForm = this.formBuilder.group({
      Name:['',[Validators.required,Validators.maxLength(10), Validators.minLength(2)]],
      LastName:['',[Validators.required,Validators.maxLength(10), Validators.minLength(2)]],
      Ci:['',[Validators.required,Validators.min(1), Validators.max(999999999)]],
      Phone:['',[Validators.required,Validators.min(1), Validators.max(999999999)]],
      LicensePlate:['',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
      TypeOfVehicle:['Automovil',[Validators.required]]
    })
  }

  
  onSubmit() {
    const newCourier={
        _id : undefined,
        Name: this.courierForm.controls['Name'].value,
        LastName: this.courierForm.controls['LastName'].value,
        Ci: this.courierForm.controls['Ci'].value,
        Phone: this.courierForm.controls['Phone'].value,
        LicensePlate: this.courierForm.controls['LicensePlate'].value,
        TypeOfVehicle: this.courierForm.controls['TypeOfVehicle'].value,    
        __v:undefined 
    }
    this.courierServicee.addCourier(newCourier).subscribe();
    this.courierForm.reset();
    this.router.navigateByUrl('/repartidores');
  }
}
