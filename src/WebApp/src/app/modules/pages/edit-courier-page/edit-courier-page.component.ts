import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CourierService } from 'src/app/services/courier-service/courier.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit-courier-page',
  templateUrl: './edit-courier-page.component.html',
  styleUrls: ['./edit-courier-page.component.css']
})
export class EditCourierPageComponent implements OnInit {

  form = new FormGroup({
    Name: new FormControl(''),
    LastName: new FormControl(''),
    Ci: new FormControl(''),
    Phone: new FormControl(''),
    LicensePlate: new FormControl(''),
    TypeOfVehicle: new FormControl('')    
  });

  constructor(private courierServicee: CourierService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.courierServicee.getCourier(this.activatedRoute.snapshot.paramMap.get('courierId')).subscribe(courier => {
      this.form.controls['Name'].setValue( courier.Name);
      this.form.controls['LastName'].setValue( courier.LastName);
      this.form.controls['Ci'].setValue( courier.Ci);
      this.form.controls['Phone'].setValue( courier.Phone) ;
      this.form.controls['LicensePlate'].setValue( courier.LicensePlate) ;
      this.form.controls['TypeOfVehicle'].setValue( courier.TypeOfVehicle) ;}
    )
  }


  onSubmit() {
    const newCourier={
        _id : this.activatedRoute.snapshot.paramMap.get('courierId'),
        Name: this.form.controls['Name'].value,
        LastName: this.form.controls['LastName'].value,
        Ci: this.form.controls['Ci'].value,
        Phone: this.form.controls['Phone'].value,
        LicensePlate: this.form.controls['LicensePlate'].value,
        TypeOfVehicle: this.form.controls['TypeOfVehicle'].value,    
        __v:undefined
    }
    this.courierServicee.edtiCourier(newCourier).subscribe();
    this.form.reset();
    this.router.navigateByUrl('/repartidores');
  }
}
