import { Component, OnInit } from '@angular/core';
import { CourierService } from 'src/app/services/courier-service/courier.service'
import { Courier } from 'src/app/models/courier';

@Component({
  selector: 'app-couriers',
  templateUrl: './couriers.component.html',
  styleUrls: ['./couriers.component.css']
})
export class CouriersComponent implements OnInit {

  couriers:Courier[];
  constructor(private courierService: CourierService) { }

  ngOnInit() {
    this.courierService.getCouriers().subscribe(
      couriers => {
        this.couriers = couriers;
      }
    )
  }

  onDelete(id:string){
    this.couriers = this.couriers.filter(c => c._id != id);
    this.courierService.removeCourier(id).subscribe();
  }

}
