import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Courier } from 'src/app/models/courier';
import { CourierService } from 'src/app/services/courier-service/courier.service';

@Component({
  selector: 'app-courier-info',
  templateUrl: './courier-info.component.html',
  styleUrls: ['./courier-info.component.css']
})
export class CourierInfoComponent implements OnInit {

  courier:Courier
  constructor(private courierService:CourierService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.courierService.getCourier(this.activatedRoute.snapshot.paramMap.get('courierId')).subscribe(courier =>{
      this.courier = courier
    })
  }

}
