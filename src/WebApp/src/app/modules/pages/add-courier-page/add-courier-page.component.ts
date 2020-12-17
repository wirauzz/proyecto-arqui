import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CourierService } from 'src/app/services/courier-service/courier.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-courier-page',
  templateUrl: './add-courier-page.component.html',
  styleUrls: ['./add-courier-page.component.css']
})
export class AddCourierPageComponent implements OnInit {


  form = new FormGroup({
    Name: new FormControl(''),
    LastName: new FormControl(''),
    Ci: new FormControl(''),
    Phone: new FormControl(''),
    LicensePlate: new FormControl(''),
    TypeOfVehicle: new FormControl('')    
  });
  constructor(private courierServicee: CourierService, private router: Router) { }

  ngOnInit() {
  }

  
  onSubmit() {
    const newCourier={
        _id : undefined,
        Name: this.form.controls['Name'].value,
        LastName: this.form.controls['LastName'].value,
        Ci: this.form.controls['Ci'].value,
        Phone: this.form.controls['Phone'].value,
        LicensePlate: this.form.controls['LicensePlate'].value,
        TypeOfVehicle: this.form.controls['TypeOfVehicle'].value,    
        __v:undefined
    }
    this.courierServicee.addCourier(newCourier).subscribe();
    this.form.reset();
    this.router.navigateByUrl('/repartidores');
  }
}
