import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CourierService } from 'src/app/services/courier-service/courier.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit-courier-page',
  templateUrl: './edit-courier-page.component.html',
  styleUrls: ['./edit-courier-page.component.css']
})
export class EditCourierPageComponent implements OnInit {

  courierForm: FormGroup

  constructor(private courierServicee: CourierService, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.courierServicee.getCourier(this.activatedRoute.snapshot.paramMap.get('courierId')).subscribe(courier => {
      this.courierForm = this.formBuilder.group({
        Name:[courier.Name,[Validators.required,Validators.maxLength(10), Validators.minLength(2)]],
        LastName:[courier.LastName,[Validators.required,Validators.maxLength(10), Validators.minLength(2)]],
        Ci:[courier.Ci,[Validators.required,Validators.min(1), Validators.max(999999999)]],
        Phone:[courier.Phone,[Validators.required,Validators.min(1), Validators.max(999999999)]],
        LicensePlate:[courier.LicensePlate.toString(),[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
        TypeOfVehicle:[courier.TypeOfVehicle.toString(),[Validators.required]]
      })
      })
    }


  onSubmit() {
    const newCourier={
        _id : this.activatedRoute.snapshot.paramMap.get('courierId'),
        Name: this.courierForm.controls['Name'].value,
        LastName: this.courierForm.controls['LastName'].value,
        Ci: this.courierForm.controls['Ci'].value,
        Phone: this.courierForm.controls['Phone'].value,
        LicensePlate: this.courierForm.controls['LicensePlate'].value,
        TypeOfVehicle: this.courierForm.controls['TypeOfVehicle'].value,  
        __v:undefined
    }
    this.courierServicee.edtiCourier(newCourier).subscribe();
    this.courierForm.reset();
    this.router.navigate(['/repartidores']);
  }
}
